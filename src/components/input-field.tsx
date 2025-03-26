'use client';

import { Field } from "formik";
import React from "react";

export interface InputFieldProps {
    label?: string;
    id?: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean; // Додаємо пропс required
}

export default function InputField({ label, id, required, ...rest }: InputFieldProps) {
    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={id} className="mb-2 text-base color-gray-900">
                    {label}
                </label>
            )}
            <Field
                {...rest}
                id={id}
                required={required} 
                className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
            />
        </div>
    );
}