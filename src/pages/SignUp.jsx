import React, { useState } from 'react'
import { creatUser } from '../auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const navegator = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsRegistering(true);
        if (password !== confirmPassword){
            return;
        }
        await creatUser(email, password);
        setIsRegistering(false);
        navegator("/");
    }

    return (
        <>
        {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Criar usuario
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                onSubmit={onSubmit}
                action="#" method="POST" className="space-y-6"
            >
                <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email
                </label>
                <div className="mt-2">
                    <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Senha
                    </label>
                </div>
                <div className="mt-2">
                    <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                    Confirmar senha
                    </label>
                </div>
                <div className="mt-2">
                    <input
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    autoComplete="confirm-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
                </div>

                <div>
                <button
                    disabled={isRegistering}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isRegistering ? "Registrando..." : "Registrar"}
                </button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export { SignUp }