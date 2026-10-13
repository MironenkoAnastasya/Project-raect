import { useState } from 'react';
import { Input } from '~/components/ui/input';
import { registerSchema, type RegisterFormData, type RegisterFormInput } from '~/lib/validation/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const Apply = () => {
    const [submittedData, setSubmittedData] = useState<RegisterFormData | null>(null);
      const {
            register,
            handleSubmit,
            formState: { errors },
            } = useForm<RegisterFormInput, unknown, RegisterFormData>({
                resolver: zodResolver(registerSchema),
                mode: 'onChange',
                });
            
                const onSubmit = (data: RegisterFormData) => {
                console.log(data);
                setSubmittedData(data);
                };
    return (
        <div>
            <h1 className='text-3xl font-bold mb-6 text-center mt-6 '>Анкета кандидата</h1>

            <form className='flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200' onSubmit={handleSubmit(onSubmit)}>

                <h2 className="text-lg font-semibold">Особисті дані</h2>
                <Input label="Name" id="name" type="text" error={errors.name?.message} {...register("name")} placeholder="Имя" />
                <Input label="Email" id="email" type="email" error={errors.email?.message} {...register("email")} placeholder="Email" />
                <Input label="Phone" id="phone" type="tel" error={errors.phone?.message} {...register("phone")} placeholder="+380XXXXXXXXX" />
                <Input label="Birth Date" id="birthDate" type="date" error={errors.birthDate?.message} {...register("birthDate")} placeholder="Дата рождения" />
                <select className='border border-gray-300 rounded-md p-2' {...register("specialty")}>
                    <option value="">Оберіть спеціальність</option>
                    <option value="frontend">frontend</option>
                    <option value="backend">backend</option>
                    <option value="fullstack">fullstack</option>
                    <option value="design">design</option>
                </select>
                {errors.specialty?.message && <p className="text-red-600 text-sm">{errors.specialty.message}</p>}


                <fieldset name="skills" className='flex gap-4 flex-col border border-gray-300 rounded-md p-4'>
                    <legend className='font-bold mb-2'>Технології</legend>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" value="react" {...register("skills")} />
                        React
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" value="typescript" {...register("skills")} />
                        TypeScript
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" value="nodejs" {...register("skills")} />
                        Node.js
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" value="git" {...register("skills")} />
                        Git
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" value="docker" {...register("skills")} />
                        Docker
                    </label>
                    
                </fieldset>
                {errors.skills?.message && <p className="text-red-600 text-sm">{errors.skills.message}</p>}
                
                <fieldset  name="experience" className='flex gap-4 flex-col border border-gray-300 rounded-md p-4'>
                    <legend className='font-bold mb-2'>Досвід роботи</legend>
                    <label className='flex items-center gap-2'>
                        <input type="radio" value="none" {...register("experience")} />
                        Немає досвіду
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="radio" value="less1" {...register("experience")} />
                        Менше 1 року
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="radio" value="1to3" {...register("experience")} />
                        1-3 роки
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="radio" value="3plus" {...register("experience")} />
                        Більше 3 років
                    </label>
                </fieldset>
                {errors.experience?.message && <p className="text-red-600 text-sm">{errors.experience.message}</p>}

                <label className='flex items-center gap-2'>
                    <input type="checkbox" value="accepted" {...register("terms")} />
                    Я згоден з умовами надання послуг
                </label>
                {errors.terms?.message && <p className="text-red-600 text-sm">{errors.terms.message}</p>}
                <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                    Отправить
                </button>
            </form>
            {submittedData && (
                <section className="max-w-md mx-auto mt-6 rounded-lg border border-green-300 bg-green-50 p-6" aria-live="polite">
                    <h2 className="text-xl font-bold text-green-800">Анкета прийнята</h2>
                    <dl className="mt-4 space-y-2 text-sm text-gray-800">
                        <div><dt className="inline font-semibold">Ім'я: </dt><dd className="inline">{submittedData.name}</dd></div>
                        <div><dt className="inline font-semibold">Email: </dt><dd className="inline">{submittedData.email}</dd></div>
                        <div><dt className="inline font-semibold">Телефон: </dt><dd className="inline">{submittedData.phone}</dd></div>
                        <div><dt className="inline font-semibold">Дата народження: </dt><dd className="inline">{submittedData.birthDate}</dd></div>
                        <div><dt className="inline font-semibold">Спеціальність: </dt><dd className="inline">{submittedData.specialty}</dd></div>
                        <div><dt className="inline font-semibold">Технології: </dt><dd className="inline">{submittedData.skills.join(", ")}</dd></div>
                        <div><dt className="inline font-semibold">Досвід: </dt><dd className="inline">{submittedData.experience}</dd></div>
                        <div><dt className="inline font-semibold">Умови: </dt><dd className="inline">Прийняті</dd></div>
                    </dl>
                </section>
            )}
        </div>
    );
}

export default Apply;
