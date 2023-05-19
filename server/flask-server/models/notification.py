class Notification:
    def __init__(self, created_at, title, message, priority):
        self.created_at = created_at
        self.title = title
        self.message = message
        self.priority = priority