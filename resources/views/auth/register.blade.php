@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="{{ mix('css/login.css') }}">
<script src="{{ mix('js/login.js') }}" defer></script>

<div class="limiter">
    <div class="container-login100">
        <div class="modal-login row align-items-center">
            <div class="wrap-login100 align-items-center">
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="images/img-02.png" alt="IMG">
                </div>
    
                <form class="login100-form "  action="{{ route('register') }}" method="POST">
                    @csrf
                    <span class="login100-form-title">
                        Register Account
                    </span>
    
                    <div class="wrap-input100" >
                        <input class="input100" type="text" name="email" placeholder="{{ __('Email Address') }}"
                            value="{{ old('email') }}" required autocomplete="email">
                        <span class="focus-input100"></span>
                        {{-- Here --}}
                        <span class="symbol-input100">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>
                    @error('email')
                            <div class="text-danger">{{ $message }}</div>
                    @enderror
    
                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="text" name="username"  value="{{ old('username') }}" placeholder="{{ __('Username') }}"
                         required>
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </span>
                    </div>
    
                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="password" name="password" placeholder="{{ __('Password') }}"  value="{{ old('password') }}" required autocomplete="current-password">
                        
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>
                    @error('password')
                            
                            <div class="text-danger">{{ $message }}</div>
                    @enderror
    
                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="password" name="password_confirmation" placeholder="{{ __('Confirm Password') }}" value="{{ old('password_confirmation') }}" required>
                        
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>
    
                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                            Register
                        </button>
                    </div>
    
                    <div class="text-center p-t-50">
                        <a class="txt2" href="{{ route('login') }}">
                            Back to Login
                            <i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@endsection