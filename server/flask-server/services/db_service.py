import sqlite3 as sql
from datetime import datetime


def init():
    try:
        conn = sql.connect('database.db')
        print('Opened database successfully')

        conn.execute('CREATE TABLE IF NOT EXISTS notifications ( created_at TEXT PRIMARY KEY NOT NULL, ' +
                     'title TEXT NOT NULL, message TEXT NOT NULL, priority INT NOT NULL ) ')
        print('Notification table created successfully')

        conn.execute('CREATE TABLE IF NOT EXISTS shelters ( id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                     'name TEXT NOT NULL, address TEXT NOT NULL, district TEXT NOT NULL, lat REAL NOT NULL, long REAL NOT NULL ) ')
        print('Shelter table created successfully')

        conn.close()
    except Exception as e:
        print('Something wrong happened')
        print(e)


def save_shelter(shelter):
    try:
        with sql.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('INSERT INTO shelters (name, address, district, lat, long)' +
                           'VALUES (?,?,?,?,?)', (shelter.name, shelter.address, shelter.district, shelter.lat, shelter.long))
            conn.commit()
    except Exception as e:
        print(e)
        conn.rollback()
        raise Exception('Error in insert operation')
    finally:
        conn.close()


def save_notification(notification):
    try:
        date = datetime.now()
        formatted_date = date.strftime('%d/%m/%Y %H:%M:%S')

        with sql.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('INSERT INTO notifications (created_at, title, message, priority)' +
                           'VALUES (?,?,?,?)', (formatted_date, notification.title, notification.message, notification.priority))
            conn.commit()
    except:
        conn.rollback()
        raise Exception('Error in insert operation')
    finally:
        conn.close()


def get_shelters():
    try:
        with sql.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM shelters')
            return cursor.fetchall()
    except:
        raise Exception('Error in select operation')
    finally:
        conn.close()


def get_shelter_by_id(id):
    try:
        with sql.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM shelters where id = ?', (id))
            return cursor.fetchone()
    except:
        raise Exception('Error in select operation')
    finally:
        conn.close()


def update_shelter(shelter):
    try:
        with sql.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('UPDATE shelters SET name = ? , address = ?, district =?, lat=?, long=? WHERE id = ?',
                           (shelter.name, shelter.address, shelter.district, shelter.lat, shelter.long, shelter.id))
    except:
        raise Exception('Error in update operation')
    finally:
        conn.close()


def delete_shelter(id):
    try:
        with sql.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('DELETE FROM shelters WHERE id = ?',
                           (id))
    except:
        raise Exception('Error in update operation')
    finally:
        conn.close()


def get_notifications():
    try:
        with sql.connect('database.db') as conn:
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM notifications')
            return cursor.fetchall()
    except:
        raise Exception('Error in select operation')
    finally:
        conn.close()
