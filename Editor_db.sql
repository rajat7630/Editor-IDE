create table User_Info(
    Id int Primary key AUTO_INCREMENT NOT NUll,
    Email VARCHAR(100) NOT NUll,
    Solution  VARCHAR(16000) ,
    Status VARCHAR(20) NOT NULL
);


INSERT INTO Problems
( 
 id, description, testCase, output
)
VALUES
( 
    1,'Write a program to find sum a array of integers', '[1, 2, 3, 4, 5]', '[15]'
),
( 
    2,'Write  program to find product of given numbers','[1, 2, 3]', '[6]'
)

CREATE TABLE Problems(
    id integer PRIMARY KEY NOT NULL,
    description VARCHAR(1000) NOT NULL,
    testCase VARCHAR(1000) NOT NULL,
    output VARCHAR(1000) NOT NULL
)