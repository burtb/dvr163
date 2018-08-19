define(function(require){
    
    var Backbone = require('app/backbone-base');
    var BaseView = require('views/view-base');
    var template = require ('text!html/main-menu.tpl');
    var Mustache = require('Mustache');
    
    /********************************/
    
    return BaseView.extend({
        
        tagName: 'div',
        id: 'main-menu',
        className: 'row',
        
        initialize: function(channel_number){
            
            this.app = BaseView.app;
            
            // Events
            // this.listenTo(this.$('img'), 'load', this.imgLoad);
            
        },
        
        events: {
            'click #zoom-out-button': 'zoomOut',
            'click #zoom-in-button': 'zoomIn',
            'click #zoom-reset-button': 'zoomReset',
        },
        
        render: function(){
            
            this.$el.html(Mustache.render(template, {}));
            return this;
            
        },
        
        /********************************/
        
        zoomOut: function(){
            if(this.getZoom() > 0.1){
                this.setZoom(this.getZoom() - 0.1);
            }
        }, 
        
        zoomIn: function(){
            this.setZoom(this.getZoom() + 0.1);
        }, 
        
        zoomReset: function(){
            this.setZoom(1);
        },
        
        getZoom: function(){
            return parseFloat(this.app.$('.cam-stream').css('zoom'));
        },
        
        setZoom: function(value){
            this.app.$('.cam-stream').css('zoom', value);
        }
        
    });
    
});
