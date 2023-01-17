from flask import Flask 
from models import User, OuterBubble, InnerBubble, Friends, ChatLine, Message
from dependencies import db
from population_script import test_message, test_chatline, test_friends, test_innerbubble, test_outerbubble, test_users

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///socialbubble.db"

db.init_app(app)

with app.app_context():
    
    db.create_all()
    
    # interests = [Interests(interest_name='nightlife'), 
    #              Interests(interest_name='books')]

    # db.session.bulk_save_objects('interests')
    # db.session.commit()

    for message in test_message:
        new_message = Message(chatline_id=message['chatline_id'])
        db.session.commit()
        
    for chatline in test_chatline:
        new_chatline = ChatLine(outerbubble_id=chatline['outerbubble_id'],
                                innerbubble_id=chatline['innerbubble_id'],
                                date=chatline['date'],
                                user_id=chatline['user_id'])
        db.session.commit()

    for outerbubble in test_outerbubble:
        new_outerbubble = OuterBubble(inner_bubbles=outerbubble['inner_bubbles'],
                                    users=outerbubble['users'],
                                    chatlines=outerbubble['chatlines'])
        db.session.commit()
        
    for innerbubble in test_innerbubble:
        new_innerbubble = InnerBubble(outer_bubble_id=innerbubble['outer_bubble_id'],
                                    users=innerbubble['users'],
                                    chatlines=innerbubble['chatlines'])

        db.session.commit()
        
    for user in test_users:
        new_user = User(first_name=user['first_name'],
                        last_name=user['last_name'],
                        profile_photo=user['profile_photo'],
                        friends=user['friends'],
                        email=user['email'],
                        profession=user['profession'],
                        interests=user['interests'],
                        sex=user['sex'],
                        password=user['password'],
                        outerbubble_id=user['outerbubble_id'],
                        innerbubble_id=user['innerbubble_id']
        )
        
        db.session.commit()
        
    for friend in test_friends:
        new_friend = Friends(user_id=friend['user_id'])
        
        db.session.commit()
    