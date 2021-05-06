import React from 'react';
import appleQr from '../assets/QR_itunes.png';
import googleQr from '../assets/QR_googleplay.png';
import { LockClosedIcon } from '@heroicons/react/solid'
import Logo from '../assets/logo_360.png'


export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-24 w-auto"
                        src={Logo}
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">360° Login</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        oder{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Registrieren
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Benutzername
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">


                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Password vergessen?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
                            Einloggen
                        </button>
                    </div>
                </form>
                <div className="flex flex-row justify-center gap-24">
                    <img src={appleQr} alt=""/>
                    <img src={googleQr} alt=""/>
                </div>
            </div>
        </div>
    )
}