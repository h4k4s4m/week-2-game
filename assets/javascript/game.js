var selected_charater = "";
var clicked_on = "";
var selection_made = false;

var luke_obj = {
    img: '<img id="luke" class="character-card" src="assets\\images\\luke.jpg" />',
    health: 60,
    damage_base: 6,
    damage_growing: 6,
    hero: false
};
var obi_obj = {
    img: '<img id="obi" class="character-card" src="assets\\images\\obi.jpg" />',
    health: 90,
    damage_base: 12,
    damage_growing: 12,
    hero: false
};
var pepsi_obj = {
    img: '<img id="pepsi" class="character-card" src="assets\\images\\pepsi.jpg" />',
    health: 100,
    damage_base: 16,
    damage_growing: 16,
    hero: false
};
var vader_obj = {
    img: '<img id="vader" class="character-card" src="assets\\images\\vader.jpg" />',
    health: 150,
    damage_base: 20,
    damage_growing: 20,
    hero: false
};

$('#character-selection').html(luke_obj["img"]);
$('#character-selection').append(obi_obj["img"]);
$('#character-selection').append(pepsi_obj["img"]);
$('#character-selection').append(vader_obj["img"]);
$('#fight').hide();
$('.character-card').click(select);

function select(event) {
    clicked_on = event.target.id;
    if (!selection_made) {
        selected_charater = event.target.id;
        selection_made = true;


        $('#fight').show();

        switch (selected_charater) {
            case "luke":
                {
                    $("#character-selection").html("");
                    $("#character").html(luke_obj['img']);
                    luke_obj["hero"] = true;
                    $("#enemies").html(obi_obj['img'] + pepsi_obj['img'] + vader_obj['img']);
                    $('.character-card').click(select);
                    break;
                }
            case "obi":
                {
                    $("#character-selection").html("");
                    $("#character").html(obi_obj['img']);
                    obi_obj["hero"] = true;
                    $("#enemies").html(luke_obj['img'] + pepsi_obj['img'] + vader_obj['img']);
                    $('.character-card').click(select);
                    break;
                }
            case "pepsi":
                {
                    $("#character-selection").html("");
                    $("#character").html(pepsi_obj['img']);
                    pepsi_obj["hero"] = true;
                    $("#enemies").html(luke_obj['img'] + obi_obj['img'] + vader_obj['img']);
                    $('.character-card').click(select);
                    break;
                }
            case "vader":
                {
                    $("#character-selection").html("");
                    $("#character").html(vader_obj['img']);
                    pepsi_obj["hero"] = true;
                    $("#enemies").html(luke_obj['img'] + pepsi_obj['img'] + obi_obj['img']);
                    $('.character-card').click(select);
                    break;
                }
        }
    } else {
        switch (clicked_on) {
            case "luke":
                if (!luke_obj["hero"]) {

                }
        }
    }
}