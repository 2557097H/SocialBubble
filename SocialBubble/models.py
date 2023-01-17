from dependencies import db


    

class OuterBubble(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inner_bubbles = db.relationship('InnerBubble', backref='outerbubble', lazy=True)
    users = db.relationship('User', backref='outerbubble', lazy=True)
    chatlines = db.relationship('ChatLine', backref='innerbubble', lazy=True)
    
    def __init__(self, id):
        self.id = id
    
class InnerBubble(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    outer_bubble_id = db.Column(db.Integer, db.ForeignKey('outerbubble.id'),
                                nullable=False)
    users = db.relationship('User', backref='innerbubble', lazy=True)
    chatlines = db.relationship('ChatLine', backref='innerbubble', lazy=True)
    
    def __init__(self,id):
        self.id=id

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    profile_photo = db.Column(db.LargeBinary, nullable=True)
    email = db.Column(db.String, nullable=True)
    friends = db.relationship('Friends', backref='user', lazy=True)
    interests = db.Column(db.String(100), nullable=False)
    profession = db.Column(db.String(40), nullable=False)
    sex = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String, nullable=False)
    outer_bubble_id = db.Column(db.Integer, db.ForeignKey('outerbubble.id'))
    inner_bubble_id = db.Column(db.Integer, db.ForeignKey('innerbubble.id'))
    
    def __init__(self, first_name):
        self.first_name = first_name 

class Friends(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                        nullable=False)
    
    def __init__(self, id):
        self.id = id
    
class ChatLine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    outer_bubble_id = db.Column(db.Integer, db.ForeignKey('outerbubble.id'),
                                nullable=False)
    inner_bubble_id = db.Column(db.Integer, db.ForeignKey('innerbubble.id'),
                                nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    def __init__(self, id):
        self.id=id
    
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    chatline_id = db.Column(db.Integer, db.ForeignKey('chatline.id'))
    chatline = db.relationship("ChatLine", backref="chatline")
    message = db.Column(db.String(200), nullable=True)
    
    def __init__(self, id):
        self.id=id
    
# class Interests(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     interest_name = db.Column(db.String, nullable=False)
    
#     def __init__(self, id):
#         self.id=id
    
    
    

    
    



    
