(function ($) {

    $.fn.passwordUX = function (options) {

        var settings = $.extend(
            {
                wrapperClass: 'password-ux',
                switcherClass: 'switch',
                switcherBg: '#F2F2F2',
                switcherIndent: 4,
                textTransform: 'transform',
                showHtml: 'show',
                hideHtml: 'hide',
                dataAttr: 'data-pux-show'
            }, options);

        return this.each(function (i, el) {

            var $el = $(el),
                elHeight = $el[0].offsetHeight,
                $wrapper = $('<div/>'),
                $switcher = $('<div/>'),
                switcherWrapper,
                switchState,
                passwordInput;

            $wrapper
                .css({position: 'relative'})
                .addClass(settings.wrapperClass)
                .attr(settings.dataAttr, false);

            $switcher
                .css({
                    position: 'absolute',
                    top: settings.switcherIndent,
                    right: settings.switcherIndent,
                    padding: '0 ' + (settings.switcherIndent * 2) + 'px',
                    background: settings.switcherBg,
                    lineHeight: elHeight - (settings.switcherIndent * 2) + 'px',
                    textTransform: settings.textTransform,
                    cursor: 'pointer',
                    userSelect: 'none'
                })
                .addClass(settings.wrapperClass + '_' + settings.switcherClass)
                .html(settings.showHtml);

            $el
                .css({boxSizing: 'border-box'})
                .wrap($wrapper);

            $switcher.insertAfter($el);

            $switcher.on('click', function (event) {

                switcherWrapper = $(this).parents('.' + settings.wrapperClass);
                switchState = switcherWrapper.attr(settings.dataAttr);
                passwordInput = switcherWrapper.find('input');

                if (switchState == 'false') {
                    switcherWrapper.attr(settings.dataAttr, true);
                    $(this).html(settings.hideHtml);
                    passwordInput.attr('type', 'text');
                } else {
                    switcherWrapper.attr(settings.dataAttr, false);
                    $(this).html(settings.showHtml);
                    passwordInput.attr('type', 'password');
                }

            });

        });

    };

})(jQuery);
