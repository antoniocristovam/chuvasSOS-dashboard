from firebase_admin import messaging

TOPIC = 'warning'


def send_notification(data):
    message = messaging.Message(
        notification=messaging.Notification(
            title=data.title,
            body=data.message,
        ),
        topic=TOPIC
    )
    messaging.send(message)
    print("Notificação enviada com sucesso")


def subscribe_to_topic(token):
    response = messaging.subscribe_to_topic(token, TOPIC)

    if response.failure_count > 0:
        raise Exception(
            f'Houve um erro ao registrar o token no tópico. Erros: {list(map(lambda e: e.reason, response.errors))}')
