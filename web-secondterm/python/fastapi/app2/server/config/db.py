from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

db_url = "mysql+pymysql://root:@localhost:3306/fastapi_app1"

engine = create_engine(db_url)

session_local = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()

def get_db():
    db = session_local()
    try:
        yield db
    finally:
        db.close()


# def sample():
#     return 20
#     return 1
#     return 10
# print(sample())
# print(sample())
# print(sample())

# def sample2():
#     yield 20
#     yield 1
#     yield 10

# print(sample2())
# print(sample2())
# print(sample2())


