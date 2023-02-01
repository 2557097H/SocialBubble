from models import User, OuterBubble, InnerBubble, Friends, ChatLine, Message
from dependencies import db
from flask import Blueprint, request
import base64

user = Blueprint('user', __name__)

@user.route('/delete-user', methods=['POST'])
def delete_user(user_id):
    
    user = User.query.filter_by(id=user_id).first()
    db.session.delete(user)
    db.session.commit()

@user.route('/create-user', methods=['POST'])
def add_user(first_name, last_name, profile_photo, email, friends, interests, profession, date_of_birth, sex, password, outer_bubble_id, inner_bubble_id):
    
    first_name = request.form.get('first_name') or None
    last_name = request.form.get('last_name') or None
    profile_photo = request.form.get('profile_photo') or None
    friends = request.form.get('friends') or None
    interests = request.form.get('interests') or None
    profession = request.form.get('profession') or None
    date_of_birth = request.form.get('date_of_birth') or None 
    sex = request.form.get('sex') or None
    password = request.form.get('password') or None
    outer_bubble_id = request.form.get('outer_bubble_id') or None
    inner_bubble_id = request.form.get('inner_bubble_id') or None 
    
    if first_name == None or last_name == None or email == None or password == None:
        print("User parameters missing!")
        return 0
    
    new_user = User(first_name, last_name, profile_photo, email, friends, interests, profession, date_of_birth, sex, base64.b64decode(password), outer_bubble_id, inner_bubble_id)
    db.session.add(new_user)
    db.session.commit() 

@user.route('/change-password', methods=['POST'])
def change_user_password(user_id, new_password, possible_current_password):
    user_id = request.form.get('user_id') or None
    new_password = request.form.get('new_password') or None 
    possible_current_password = request.form.get('old_password') or None 
    
    user = User.query.filter_by(id=user_id).first()

    if user.password == base64.b64encode(possible_current_password):
        user.password = base64.b64encode(new_password)
    
    db.session.commit()
        
        
@user.route('/log-in', methods=['POST'])
def user_login(email, password):
    
    email = request.form.get('email') or None
    password = request.form.get('password') or None
    
    user = User.query.filter_by(email=email).first()
    if user.password == base64.b64encode(password):
        #login?   
    
    
def add_outerbubble(innerbubbles, users, chatline):
    
    new_outerbubble = OuterBubble(innerbubbles, users, chatline)
    db.session.add(new_outerbubble)
    db.session.commit()
    
def delete_outerbubble(outerbubble_id):
    
    outerbubble = OuterBubble.query.filter_by(id=outerbubble_id).first()
    db.session.delete(outerbubble)
    db.session.commit()
    
def add_innerbubble(outerbubble_id, users, chatline):
    
    if(outerbubble_id == None):
        print("Innerbubble parameters missing!")
        return 0
        
    new_innerbubble = InnerBubble(outerbubble_id, users, chatline)
    db.session.add(new_innerbubble)
    db.session.commit()

def delete_innerbubble(innerbubble_id):
    
    innerbubble = InnerBubble.query.filter_by(id=innerbubble_id).first()
    db.session.delete(innerbubble)
    db.session.commit()
    

    

    
    

    

    