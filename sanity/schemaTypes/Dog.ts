import { defineField, defineType } from "sanity";

export const Dogs = defineType({
    name:"dogs",
    title:"Dogs",
    type:"document",
    fields:[
        
        defineField({
            name:"age",
            type:"number"
        }),
        defineField({
            name:"breed",
            type:"string"
        }),
        defineField({
            name:"city",
            type:"string"
        }),
        defineField({
            name:"dogdescription",
            type:"text",
            validation:(Rule)=>Rule.min(30).max(500).required().error("please enter the dog description"),
        }),
        defineField({
            name:"location",
            type:"text",
            validation:(Rule)=>Rule.min(30).max(500).required().error("please enter the dog's exact Location"),
        }),
        defineField({
            name:"image",
            type:"url",
            validation:(Rule)=>Rule.required().error("Add dogs image")
        }),
        defineField({
            name:"Ownername",
            type:"string",
            validation:(Rule)=>Rule.min(2).max(20).required().error("Please enter your name ")
        }),
        defineField({
            name:"Phonenumber",
            type:"number",
            validation:(Rule)=>Rule.required().min(9).error("Please enter your contact information ")
        }),
        defineField({
            name:"ownerdetails",
            type:"text",
            validation:(Rule)=>Rule.min(30).max(200).required().error("Please enter your own details ")
        }),
        
       
    ],
    preview:{select:{
        title:"city",
    }}
})