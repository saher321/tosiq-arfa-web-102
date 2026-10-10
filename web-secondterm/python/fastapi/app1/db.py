import pymysql.cursors

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    database="fastapi_app1",
    port=3306
)

cursor = connection.cursor()

categories = cursor.execute("select * from categories")
users = cursor.execute("select * from users")
connection.commit()
connection.close()