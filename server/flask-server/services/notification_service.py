from firebase_admin import messaging

def send_notification(data):
    topic = "warning"
    message = messaging.Message(
                notification = messaging.Notification(
                        title=data.title,
                        body=data.message,
                    ),
                topic=topic
            )
    messaging.send(message)
    print("Notificação enviada com sucesso")
