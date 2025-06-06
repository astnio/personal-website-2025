---
title: 'Introduction to Databases & SQL'
description: 'A brief introduction to databases and structured query language (SQL).'
date_published: 2023-10-03
cover: './cover.png'
cover_alt: 'Cover image of the course'
topic: Development
category: 'Databases'
tags: ['sql', 'databases', 'mysql']
published: false
---

> If you already know what SQL is and want to jump in right way, then [click here](#getting-started) to get started!

## What is SQL?

SQL (pronounced as _sequel_) is an acronym for **Structured Query Language**, and it is used to create, modify, and retrieve information from **databases**, or more specifically, _relational_ databases. It is how companies everywhere manage their information and data.

It was made by Donald Chamberlin and Raymond Boyce in the mid 1970s, and was the very first language for relational databases that became a commercial success.

## What is a Database?

A database is a body of organized information that has a defined structure. It what we use to organize our data. We can think of it as a collection of tables, similar to what we may find in a spreadsheet. Although a database can be anything (ie. physical files or collection of note cards) it typically is in digital format. It doesn't matter how you store the data, though. As long as the data is being stored and is structured logically, then you have a database.

### Database Types

Databases come in two flavors of models: operational and analytical.

#### Operational Databases

These models are the most common, as they are used when a business or organization must frequently collect data, then modify and maintain that data. The kind of data that you can expect to find stored on an operational database is _dynamic_. This kind of data is always changing, and is always updated.

#### Analytical Databases

The analytical database is functionally the opposite of the operational database. In an analytical database, you often store data from past events, as opposed to constantly updating existing data to match the latest update. These databases are good for viewing and tracking statistics and trends.

Also unlike operational databases, the data found in an analytical database is never changing nor updated. This is also known as being _static_. However, new data is often still added.

> **Summary**
>
> **Operational** databases are used for daily operations, and are constantly being updated.
>
> **Analytical** databases are used for storing data for later use in analytics.

Among the mentioned models of databases, there are several other models too. In the past, the hierarchical and network models were common. However, since the introduction of the relational model, you will rarely ever find a modern database that uses those past models. Moving forward, we will be working with **Relational Databases**.

## What are Relational Databases?

A relational database is made _relational_ because it is based on _set theory_, and the term _relation_ is a part of set theory.

The relational model was introduced in the 1970s by Edgar Codd, a computer scientist who worked for IBM. He utilized _set theory_ and _first-order predicate logic_ in mathematics as his basis for the relational model.

That's a brief history about how relational databases came about, and what they are based on. You don't need to know anything about set theory or first-order predicate logic in order to get started learning SQL.

## Database Management Systems

To better understand how we use databases, we need to know about **Database Management Systems _(DBMS)_**.

A **Database Management Systems _(DBMS)_** is a program that enables us to both interact with and modify databases. These are similar to how we use Excel to create and manage spreadsheets, except with the _DBMS_ being used to create and manage _databases_. In particular, we are going to be using a **Relational Database Management System (_RDBMS_)**

The first prevalent DBMSs were System R and Interactive Graphics Retrieval System (INGRES). These were used in the early 1970s, with System R being made by IBM and INGRES being made at the University of California in Berkeley.

## Parts of a Relational Database

Relational databases store their data in **_relations_**, which we can also call _tables_. Every _relation_ is made up of **_tuples_** and **attributes**. We can call **tuples** _records_ or _rows_. **Attributes** can be known as _columns_ or _fields_.

> **Summary**
>
> A relational database consists of **Tables**.
>
> **Tables** consist of **rows** _(records/tuples)_ and **columns** _(fields/attributes)_.

### Tables

You won't find a structure more fundamental to a relational database than the **Table**. Every single _table_ represents one single _subject_. Within every table, there must be at least one _column_, which is called the **Primary Key**. The _primary key_ is how we can uniquely identify each row in the table.

#### Table Subjects

When a table is made, it must represent a very specific object or event.

##### Objects

An Object Table can be any physical, tangible thing. These kinds of tables can be people, cars, locations, or anything of that sort. The object itself doesn't matter, as everything has a trait or characteristic that can be identified as data.

##### Events

As the name suggests, an Event Table stores information related to a specific event at any given point in time. Similar to Object Tables, you can find traits and characteristics of events the same way, and also store them into the table as data.

##### Objects & Events

These kinds of tables are not mutually exclusive. You can have tables that include data from both Objects and Events.

### Columns

There is no smaller structure you can find in a database than the **Column**. Since every table represents a subject, you need a way to represent a characteristic of that subject. This is where _columns_ come in, as they serve as the structure for that data. These are also among the most important aspects to consider when creating your own database, as they determine the quality of your data.

Every column must hold one, **_and only one_**, value.

### Rows

A row is basically a single subject in a table. Every single column represents a characteristic of the subject's row, even if the column is empty. Every row must be identified with a column that serves as the primary key.

### Keys

A column can play the role as a key, and there are a variety of types of keys that you can find in a table. They each serve a different purpose. The two must fundamental types of keys are **Primary Keys** and **Foreign Keys**.

#### Primary Keys

You often must be able to uniquely identify a row in a table, and you can achieve this through the use of one or more _primary keys_. If you have a primary key take up two or more columns, it then becomes a _composite primary key_.

These are important because they allow unique identification of a specific row by their _value_, which is recognized across the entire database. The column of a primary key then uniquely identifies the specific table in the database.

**Table-Level Integrity** is enforced by primary keys, and this is used to create relationships with other tables.

**You should _never_ have a table without a primary key.**

## Why Do We Use SQL?

Retrieving or manipulating information in a database is essential to most business functions. In order to get or modify the data we need, _we have to communicate with the database_ in some way. Using SQL is how we can translate our request to something the database will read and execute for us.

It is the language shared between humans and databases, and as long as we understand the problem we are trying to solve and the SQL syntax, we can translate our request to SQL. We are now talking to our database, and this allows it to handle our requests.

## Getting Started

You are getting started

```sql
USE test;
SELECT * FROM testTable
```
