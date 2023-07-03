'use client'

import { useState, FormEvent, ChangeEvent } from 'react';

import { Input, Button, Typography, CheckIcon, TextArea} from '@/common';

import styles from './feedbackForm.module.css';


interface IFormData {
    name: string;
    email: string;
    message: string;
}

export const FeedbackForm: React.FC = () => {

    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>)  {
        e.preventDefault();

        console.dir(formData);

        setFormData({
            name: '',
            email: '',
            message: '' 
        })
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputsWrapper}>
                <Input 
                    name="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder='Ваше имя'
                />
                <Input 
                    name="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder='Ваш e-mail' 
                    type='email'
                />
                <TextArea 
                    name='message' 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Ваше сообщение'/>
            </div>
            <div className={styles.btnWrapper}>
                <div className={styles.infoWrapper}> 
                    <CheckIcon/>
                    <div className={styles.info}>
                        <Typography fontSize="12" color='primary-50'> 
                            заполняя форму, вы даёте  
                        </Typography>
                        <Typography fontSize="12" color='primary-50' underline={true}> 
                            согласие на обработку персональных данных 
                        </Typography>
                    </div>
                </div>
                <Button>
                    <Typography fontSize="18"> Отправить </Typography>
                </Button>  
            </div>
        </form>
    )
}