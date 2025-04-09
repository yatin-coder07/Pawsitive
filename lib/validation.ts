import { z } from "zod";

export const formSchema = z.object({
  breed : z.string().min(3).max(15),
  age : z.string().min(1).max(3),
   city : z.string().min(3).max(15),
   location : z.string().min(3).max(150),
   dogdescription : z.string().min(3).max(200),
   ownerdetails: z.string().min(3).max(150),
   Ownername: z.string().min(2).max(10),
   Phonenumber: z.string(),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");

        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }),
  
});