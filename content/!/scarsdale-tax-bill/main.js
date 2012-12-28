// Views for basic and advanced statistics
var InputView = Backbone.View.extend({
    el: "#input",
    render: function(template, houseparams) {
        this.advanced = template === 'advanced'
        houseparams.pretty_total = pretty(houseparams.total)
        houseparams.slider = slider_loc(houseparams.total)
        var template_css = '#input-' + template
        var template = _.template($(template_css).html(), houseparams)
        this.$el.html(template)
    },
    output: function(e) {
        var raw = $(e.currentTarget).serializeObject()

        // Change the href.
        var href;
        if (!this.advanced) {
            href = '#?total=' + raw.total
        } else {
            href = '#?'
            for (k in raw) {
                href += (k + '=' + raw[k] + '&')
            }
        }
        $('form a').attr('href', href + '&advanced=' + !this.advanced)
        router.navigate(href + '&advanced=' + this.advanced)

        // Calculate stuff.
        return output(raw)
    },
    onlydigits: function(e) {
        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')
    },
    events: {
        "change .calculator .slider": "output",
        "submit .calculator": "output",
        "keyup input[type=text]": "onlydigits"
    }
})

// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
var pretty= function(x, places) {
    // Separate three digits by a comma.

    // Separate places greater than zero from those less than zero
    var components = x.toString().split('.')

    // Add commas
    var before_decimal_point = components[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    // Add the fraction back
    var after_decimal_point;
    if (components.length === 2 && places) {
        after_decimal_point = components[1].substring(0,places)
        after_decimal_point += '.'
        while (after_decimal_point.length < places) {
            after_decimal_point += '0'
        }
    } else if (places) {
        after_decimal_point = '.0000'
    } else {
        after_decimal_point = ''
    }

    return before_decimal_point + after_decimal_point
}

var slider_loc = function(total) {
    return ((100 * total / 100000) - 3) + '%'
}
var output = function(raw) {
    // Validate the form data, then print it pretty-like.
    var validated = { total: parseFloat(raw.total) }

    if (isNaN(validated.total)) {
        alert('Something went wrong.')
        return false;
    }

    // If we're using the slider, set the current value.
    // Dunno why this doesn't work on load.
    // It's a hack anyway; use a model.
    $('.scale .current').text('$' + pretty(validated.total))
    $('.scale .current').css('left', slider_loc(validated.total))

    var fields = ['taxable_county', 'taxable_village', 'taxable_school']
    fields.map(function(name){
        validated[name] = raw[name] ? parseFloat(raw[name]) : validated.total
    })

    var county_tax_rate = parseFloat($('tr.county td.tax-rate').text().replace(',', ''))
    var village_tax_rate = parseFloat($('tr.village td.tax-rate').text().replace(',', ''))
    var school_tax_rate = parseFloat($('tr.school td.tax-rate').text().replace(',', ''))

    // Copy input values
    $("td.assessed-total-value").text(pretty(validated.total))
    $("tr.county td.assessed-taxable-value").text(pretty(validated.taxable_county))
    $("tr.village td.assessed-taxable-value").text(pretty(validated.taxable_village))
    $("tr.school td.assessed-taxable-value").text(pretty(validated.taxable_school))

    var amount_county = validated.taxable_county * county_tax_rate / 1000
    var amount_village = validated.taxable_village * village_tax_rate / 1000
    var amount_school = validated.taxable_school * school_tax_rate / 1000
    // Compute tax amount by item
    $("tr.county td.tax-amount").text(pretty(amount_county))
    $("tr.village td.tax-amount").text(pretty(amount_village))
    $("tr.school td.tax-amount").text(pretty(amount_school))

    // Total tax amount
    $("tr.total td.tax-amount").text(pretty(amount_county + amount_village + amount_school))

    distributionView.render(validated)

    return false
}

var percentile = function(population, value){
    var nbelow = population.map(function(x) {
        return x < value
    }).reduce(function(a, b) {
        return a + b
    })
    return Math.round(100 * nbelow / population.length) + '%'
}
var DistributionView = Backbone.View.extend({
    el: '#distribution',
    render: function(houseparams) {
        var info = {
            market_value: pretty(houseparams.total / 0.0187),
            total: percentile(TOTAL_POPULATION, houseparams.total),
            taxable_county: percentile(TAXABLE_COUNTY_POPULATION, houseparams.total),
            taxable_village: percentile(TAXABLE_VILLAGE_POPULATION, houseparams.total),
            taxable_school: percentile(TAXABLE_SCHOOL_POPULATION, houseparams.total)
        }

        var template = _.template($('#distribution-template').html(), info)
        this.$el.html(template)
    }
})

var inputView = new InputView()
var distributionView = new DistributionView()

// Routes
var Router = Backbone.Router.extend({
    routes: {
        "": "calculator",
    },
    calculator: function(params){
        // Parse parameters
        if (!params) {
            // Use the median by default
            var params = {total: 19000}
        }

        var fields = ['taxable_county', 'taxable_village', 'taxable_school']
        fields.map(function(name){
            if (!params[name]) {
                params[name] = params.total
            }
        })

        // Compute the values for these (potentially default) form parameters
        output(params)

        // Add the input stuff.
        if (params.advanced === 'true'){
            inputView.render('advanced', params)
        } else {
            inputView.render('basic', params)
        }
    }
})

// Go
var router = new Router()
Backbone.history.start()

