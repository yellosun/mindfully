# Mindfully API

>You are the sky. Everything else is just the weather.
>— Pema Chödrön

This project found its roots in my disgruntled disappointment for lack of a reflective, compassionate and easily accesible quotes API. Perhaps my google-searching could be stronger. Alas, regardless of the cause, it birthed Mindfully API: _Mindfulness-based quotes API designed to encourage greater reflection, empowerment, motivation, compassion and acceptance — cornerstones for developing a life of personal design._

## Configuration
Node, Express, Sequelize, Postgres.

## Usage
http://mindfully-api.us-east-2.elasticbeanstalk.com/api

__/api__ extension above will populate all quotes available.
<hr/>

**/category/:category** extension allows you to render all quotes within a specific category. You would replace ':category' with any of the following categories:
- Mindfulness
- Acceptance
- Life
- Motivation
- Healing

`http://mindfully-api.us-east-2.elasticbeanstalk.com/api/category/healing`

_*Make sure that when you type the categroy extension, that it is lowercase._
<hr/>

**/author/:author** extension follows the same guidelines as the category extension, except you would type the quote author's name. The difference here is that you will have to seperate each name (first, middle, last) with a dash(-) and all special characters have been converted to Unicode Normalization Form. Meaning, you could type `Thích Nhất Hạnh` as `thich-nhat-hanh`.

`http://mindfully-api.us-east-2.elasticbeanstalk.com/api/author/tara-brach`

## Upcoming
...more quotes (and possibly more specific routes catered to randomized and/or daily quote intakes).
