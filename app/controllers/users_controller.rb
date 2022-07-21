class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    #POST method for '/signup'
    #This saves a new user and their info in the backend:
    def create
        user = User.create!(newuser_params)
        if user.valid? 
            render json: user, status: 201
        else
            render json: { error: "Invalid user" }, status: :unprocessable_entity
        end
    end

    # def create
    #     user = User.create!(newuser_params)
    #     session[:user_id] = user.id 
    #     render json: user, status: :created 
    # end

    #GET method for '/profile'
    #This method finds the user data from the session (the logged-in user) and 
    #sends the data to the front end

    def show 
        render json: @current_user 
    end

    private 

    def newuser_params
        params.permit(:fullname, :email, :password, :password_confirmation, :username)
    end
end

