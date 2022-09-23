create table urls 
( id bigint primary key generated always as identity (start with 1000)
, url text not null unique
);