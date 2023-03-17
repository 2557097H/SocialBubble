#SORT ALG FOR SOCIAL BUBBLES

#imports needed
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from datetime import datetime, timedelta
import time
import numpy as np
from sklearn.cluster import KMeans

#mounting the database from firebase
cred = credentials.Certificate("./socialbubble-ff070-firebase-adminsdk-9oi5w-aff3d29771.json")
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://socialbubble-ff070-default-rtdb.firebaseio.com'
})
ref = db.reference('/users')
data = ref.get()

def vectorize_users(data, unassignedUsers):
    # Extract age and latitude values for each user in the userID list
    age_ext = []
    for user_id in unassignedUsers:
        if user_id in data:
            age_ext.append([data[user_id]['age'], data[user_id]['latitude']])
    
    # Convert to numpy array
    age_ext = np.array(age_ext)
    
    return age_ext

#function that asssings users to clusters
def assign_users_to_clusters(data, num_clusters, unassigned_users):
    # Vectorize users by age and ext
    age_ext = vectorize_users(data, user_id)
    
    # Perform k-means clustering
    kmeans = KMeans(n_clusters=num_clusters, init='k-means++').fit(age_ext)
    
    # Assign each user to the closest cluster
    clusters = {}
    for i, user_id in enumerate(data):
        cluster_id = kmeans.predict([age_ext[i]])[0]
        if cluster_id not in clusters:
            clusters[cluster_id] = []
        clusters[cluster_id].append(user_id)
    
    # Update the main database with the new bubble and time added for each unassigned user
    now = datetime.now()
    for cluster_id, user_ids in clusters.items():
        if len(user_ids) < 6:
            continue
        bubble = ''.join(user_ids)
        for user_id in user_ids:
            if user_id in unassigned_users:
                data[user_id]['group assigned'] = bubble
                data[user_id]['time assigned to group'] = now
                unassigned_users.remove(user_id)
    
    return clusters


#function that adds all users un-assigned to bubbles to a list and retunrs that list
def Get_unassigned_users(data):
    unassigned_users = []
    for user_id, user_data in data.items():
        if user_data["group assigned"] is None:
            unassigned_users.append(user_id)
    return unassigned_users

#funciton that iterates through users in a bubble and if they have been in a bubble for longer than 2 weeks then they are unassigned a bubble
def Disband_bubble(data):
    for user_id, user_values in data.items():  
        time_assigned = user_values["time assigned to group"]
        if time_assigned is not None:
            if datetime.datetime.now() - time_assigned > datetime.timedelta(days=14):  # More than 2 weeks
                user_values["time assigned to group"] = None
                user_values["group assigned"] = None
        

last_execution_time = datetime.now()
#program can run-forever and every 10 mins the grouping algorithm is run
while True:
    now = datetime.now()
    print("now = ", now)
    
    #check if 10 mins have passed since last exacution
    if now >= last_execution_time + timedelta(minutes=10):
        #first we get an updated instance of the users databvase 
        data = ref.get()
        #first we go through all the users and check their time in a bubble isn't coming to an end
        Disband_bubble(data)
        #then we go through the users and sort the un-assinged users to bubbles
        unassignedUsers = Get_unassigned_users(data)
        numGroups = len(unassignedUsers) // 6
        # groups are assinged so that there are 6 people in each but if there's too many people then the groups are expaneded slightly 
        if len(unassignedUsers) % 6 != 0: 
            numGroups += 1
        newClusters = assign_users_to_clusters(data, numGroups, unassignedUsers)
        last_execution_time = now
        print("New Clusters are as follows: ")
        print(newClusters)
    
    time.sleep(2)