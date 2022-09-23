create table urls 
( id bigint primary key generated always as identity
, url text not null unique
);