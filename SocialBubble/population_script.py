"""Test Data for Local Development Database"""

from datetime import datetime

# To be expanded with more useful data

test_users = [
    
    {'first_name': 'Mark', 'last_name': 'Kerr', 'email': '2572964k@student.gla.ac.uk',
        'profile_photo': None, 'interests': 'books, music', 'profession': 'Computer Scientist', 'sex':'male',
        'password':'test',  'outerbubble_id':'1', 'innerbubble_id':'1'
    },

    {'first_name': 'Calum', 'last_name': 'Grant', 'email': 'calumgrant@gmail.com',
        'profile_photo': None, 'interests': 'dancing, hiking', 'profession': 'Construction Worker', 'sex':'male',
        'password':'test',  'outerbubble_id':'1', 'innerbubble_id':'1'
    },

    
    
]

test_outerbubble = [
    {'inner_bubbles':1, 'users': 1, 'chatlines':1},
    {'inner_bubbles':2, 'users': 2, 'chatlines':1},
    
]

test_innerbubble = [
    {'outer_bubble_id':1, 'users': 2, 'chatlines':1},
    {'outer_bubble_id':2, 'users': 1, 'chatlines':1},
    
]

test_friends = [
    {'user_id':1},
    {'user_id':2},
    
]

test_chatline = [
    {'outer_bubble_id':1, 'inner_bubble_id':2, 'date': '12/01/2023',
     'user_id':1},
    {'outer_bubble_id':2, 'inner_bubble_id':1, 'date': '12/01/2023',
     'user_id':1},
    
]

test_message = [
    {'chatline_id':1, 'message':"Hello! Nice to meet you"},
    {'chatline_id':2, 'message':"Hello! How are you?"}

    
]

