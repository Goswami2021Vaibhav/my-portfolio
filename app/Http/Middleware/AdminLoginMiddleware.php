<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminLoginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        if (session()->has('abcdefgh')) {
            $token = session()->get('abcdefgh');
            $verification = verifyLogin($token);
            $status = $verification['status'];
            $data = $verification['data'];

            if ($status == 1 || $status === true) {
                $role = $data['role'];
                if ($role == 'ADMIN') {
                    return $next($request);
                } else {
                    return redirect()->route('login-view');
                }
            } else {
                return redirect()->route('login-view');
            }
        } else {
            return redirect()->route('login-view');
        }
    }
}
