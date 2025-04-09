"use client";

import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { createPost } from "@/lib/actions";



const PostForm= () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        breed: formData.get("breed") as string,
        dogdescription: formData.get("dogdescription") as string,
        city: formData.get("city") as string,
        link: formData.get("link") as string,
        age: formData.get("age") as string,
        location: formData.get("location") as string,
        Ownername: formData.get("Ownername") as string,
        ownerdetails: formData.get("ownerdetails") as string,
        Phonenumber: formData.get("Phonenumber") as string,

       
      };

      await formSchema.parseAsync(formValues);

      const result = await createPost(prevState, formData);

      if (result.status == "SUCCESS") {
       alert("Your Post has been created")

        
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

       alert("Error!! Please chech your inputs and try again ")

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

     alert("An unexpected error has occured")

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

          
       

      


  return (
  <form action={formAction} className='Create-post'>
      <div className='Create-element'>
        <label htmlFor=' breed' className='Create-post-label'>Dog's Breed :</label>
        <Input id='breed'
        name='breed'
        className='Create-post-input'
        required
        placeholder='Enter Dogs Breed'/>

        {errors.breed && <p className='text-red-600'>{errors.breed}</p>}
      </div>

      <div className='Create-element'>
        <label htmlFor=' age' className='Create-post-label'>Dog's Age :</label>
        <Input id='age'
        name='age'
        className='Create-post-input'
        required
        placeholder='Enter Dogs Age'/>
        {errors.age && <p className='text-red-600'>{errors.age}</p>}
      </div>

      <div className='Create-element'>
        <label htmlFor='city' className='Create-post-label'>Dog's City:</label>
        <Input id='city'
        name='city'
        className='Create-post-input'
        required
        placeholder='Enter Dogs city'/>
        {errors.city && <p className='text-red-600'>{errors.city}</p>}
      </div>

        <div className='Create-element'>
        <label htmlFor=' link' className='Create-post-label'>Dog's image-URL :</label>
        <Input id='link'
        name='link'
        className='Create-post-input'
        required
        placeholder='Enter Dogs Image URL'/>
        {errors.link && <p className='text-red-600'>{errors.link}</p>}
      </div>


      <div className='Create-element'>
        <label htmlFor='location' className='Create-post-label'>Dog's Location :</label>
        <Input id='location'
        name='location'
        className='Create-post-input'
        required
        placeholder='Enter Dogs Exact Location' />
        {errors.location && <p className='text-red-600'>{errors.location}</p>}
      </div>

      <div className='Create-element'>
        <label htmlFor=' dogdescription' className='Create-post-label'>Dog's Description :</label>
        <Textarea id='dogdescription'
        name='dogdescription'
        className='Create-post-description'
        required
        placeholder='Enter Dogs Description (what happened to the dog etc)'/>
        {errors.dogdescription && <p className='text-red-600'>{errors.dogdescription}</p>}
      </div>

      <div className='Create-element'>
        <label htmlFor='Ownername' className='Create-post-label'>Owner's name :</label>
        <Input id='Ownername'
        name='Ownername'
        className='Create-post-input'
        required
        placeholder='Enter Owners Name' />
        {errors.Ownername && <p className='text-red-600'>{errors.Ownername}</p>}
      </div>
      <div className='Create-element'>
        <label htmlFor='Phonenumber' className='Create-post-label'>Owner's Phonenumber Number:</label>
        <Input id='Phonenumber'
        name='Phonenumber'
        className='Create-post-input'
        required
        placeholder='Enter Owners Phone number' />
        {errors.Phonenumber && <p className='text-red-600'>{errors.Phonenumber}</p>}
      </div>

      <div className='Create-element'>
        <label htmlFor='ownerdetails' className='Create-post-label'>Owner's ownerdetails :</label>
        <Textarea id='ownerdetails'
        name='ownerdetails'
        className='Create-post-description'
        required
        placeholder='Enter Owners Description '/>
        {errors.ownerdetails && <p className='text-red-600'>{errors.ownerdetails}</p>}
      </div>
        <div className='flex justify-center mb-10'>
        <Button type='submit' className='Post-submit-btn' disabled={isPending} >   {isPending?"Submitting...":"Submit your Post"} 
            <Send/>  </Button>
        </div>
  </form>
  )
}

export default PostForm