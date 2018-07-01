module Api
  module V1
    class RestroomsController < ApplicationController
      def index
        restrooms = RestRoom.order('created_at DESC');
        render json: {status: 'SUCCESS', message:'Loaded rooms', data:restrooms},status: :ok
      end

      def show

        restroom = RestRoom.find(params[:id]);
        render json: {status: 'SUCCESS', message:'Loaded room', data:restroom.errors},status: :unprocessable_entity

      end

      def create
        restroom = RestRoom.new(restroom_params);

        if restroom.save
          render json: {status: 'SUCCESS', message:'Loaded room', data:restroom},status: :ok

        else
          render json: {status: 'ERROR', message:'Loaded room', data:restroom},status: :ok


        end
      end

      def destroy

        restroom = RestRoom.find(params[:id]);

        restroom.destroy
        render json: {status: 'SUCCESS', message:'Deleted room', data:restroom},status: :ok

      end

      def update

        restroom = RestRoom.find(params[:id]);

        if restroom.update_attributes(restroom_params)
          render json: {status: 'SUCCESS', message:'updated room', data:restroom},status: :ok

        else
          render json: {status: 'ERROR', message:'update room failed', data:restroom},status: :ok
        end


      end


      private
      def restroom_params
        params.permit(:title, :body);

      end


    end

  end

end
