import { z } from "zod"; 

export const registerSchema = z.object({   
    name: z.string().trim().min(2, "Мінімум 2 символи").max(30, "Максимум 30 символів"),
    email: z.email("Некоректний email"),
    phone: z.string().regex(/^\+380\d{9}$/, "Некоректний номер телефону"),
    birthDate: z.iso.date().refine((date) => {
        const today = new Date();
        const [year, month, day] = date.split("-").map(Number);
        let age = today.getFullYear() - year;

        if (today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day)) {
            age -= 1;
        }

        return age >= 16 && age <= 60;
    }, {
        message: "Вік користувача має бути від 16 до 60 років",
    }),
    specialty: z.enum(["frontend", "backend", "fullstack", "design"], {
        message: "Оберіть спеціальність",
    }),
    skills: z.array(z.enum(["react", "typescript", "nodejs", "git", "docker"]))
        .min(1, "Оберіть хоча б одну технологію"),
    experience: z.enum(["none", "less1", "1to3", "3plus"], {
        message: "Оберіть досвід роботи",
    }),
    terms: z.union([z.literal("accepted"), z.literal(false)])
        .refine((value) => value === "accepted", "Потрібно прийняти умови"),
});
    
export type RegisterFormData = z.infer<typeof registerSchema>;
export type RegisterFormInput = z.input<typeof registerSchema>;
 