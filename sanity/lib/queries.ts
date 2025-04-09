import { defineQuery } from "next-sanity";

export const DOGS_QUERY = defineQuery(`*[_type == "dogs" && !defined($search) || city match $search] | order(_createdAt desc){
  city,
    _id,
    image,
    breed,
    _createdAt ,
    age
}`);

export const ADOPTION_BY_ID_QUERY = defineQuery(`*[_type == "dogs" && _id == $id]{
      
    _id
    ,city,
    image,
    breed,
    _createdAt ,
    age,
        ownerdetails,
        dogdescription,
        location,
        Ownername,
        Phonenumber
    
}
`)