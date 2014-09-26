/* ========================================================================
 * Bootstrap: uploadavatar.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * THIS IS NOT A FILE FROM ORIGINAL BOOTSTRAP REPO!
 * ======================================================================== */


+function ($) {
  'use strict';

  // UPLOADAVATAR CLASS DEFINITION
  // ======================

  var UploadAvatar = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
  }

  UploadAvatar.VERSION  = '3.2.0'

  UploadAvatar.DEFAULTS = {}

  UploadAvatar.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }


  // UPLOADAVATAR PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.uploadavatar')
      var options = $.extend({}, UploadAvatar.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.uploadavatar', (data = new UploadAvatar(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.uploadavatar

  $.fn.uploadavatar             = Plugin
  $.fn.uploadavatar.Constructor = UploadAvatar


  // UPLOADAVATAR NO CONFLICT
  // =================

  $.fn.uploadavatar.noConflict = function () {
    $.fn.uploadavatar = old
    return this
  }


  // UPLOADAVATAR DATA-API
  // ==============

  $(document).on('click.bs.uploadavatar.data-api', '[data-toggle="uploadavatar"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7

    $target.click()
    e

    // Plugin.call($target, option, this)
  })

}(jQuery);
