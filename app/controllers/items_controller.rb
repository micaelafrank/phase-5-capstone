class ItemsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_show_item
rescue_from ActiveRecord::RecordInvalid, with: :item_invalid

    def index 
        items = Item.all 
        render json: items 
    end

    def show
        item = find_item
        render json: item 
    end

    def create 
        new_item = Item.create!(item_params)
        render json: new_item, status: :created
    end

    def update
        item = find_item
        item.update!(item_params)
        render json: item, status: :ok
    end

    def destroy 
        item = find_item
        item.destroy 
        head :no_content 
    end

    private 

    def item_params
        params.permit(:itemname, :price, :description, :color, :size, :condition, :material, :user_id, images: [])
    end

    def find_item
        Item.find(params[:id])
    end

    def cant_show_item
        render json: {error: "The item you're looking for is not available."}, status: :not_available
    end

    def item_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
