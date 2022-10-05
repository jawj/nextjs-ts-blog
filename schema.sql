create table "urls" 
( "id" bigint primary key generated always as identity (start with 1000)
, "url" text not null unique
, "firstSubmitted" timestamptz not null default now()
, "lastSubmitted" timestamptz not null default now()
, "timesSubmitted" int not null default 1
, "firstVisited" timestamptz
, "lastVisited" timestamptz
, "timesVisited" int not null default 0
);