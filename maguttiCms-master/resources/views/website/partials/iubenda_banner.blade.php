<style type="text/css">
	#iubenda-cs-banner {
		bottom: 0px !important;
		left: 0px !important;
		position: fixed !important;
		width: 100% !important;
		z-index: 99999998 !important;
		background-color: black;
	}

	.iubenda-cs-content {
		display: block;
		margin: 0 auto;
		padding: 20px;
		width: auto;
		font-family: Helvetica, Arial, FreeSans, sans-serif;
		font-size: 14px;
		background: #000;
		color: #fff;
	}

	.iubenda-cs-rationale {
		max-width: 900px;
		position: relative;
		margin: 0 auto;
	}

	.iubenda-banner-content>p {
		font-family: Helvetica, Arial, FreeSans, sans-serif;
		line-height: 1.5;
	}

	.iubenda-cs-close-btn {
		margin: 0;
		color: #fff;
		text-decoration: none;
		font-size: 14px;
		position: absolute;
		top: 0;
		right: 0;
		border: none;
	}

	.iubenda-cs-cookie-policy-lnk {
		text-decoration: underline;
		color: #fff;
		font-size: 14px;
		font-weight: 900;
	}
</style>
<script type="text/javascript">
	var _iub = _iub || [];
	_iub.csConfiguration = {
		"lang": "{{ LaravelLocalization::getCurrentLocale() }}",
		"siteId": "{{ data_get($site_settings,'iubenda_site') }}",
		"banner": {
			"slideDown": false,
			"applyStyles": false
		},
		"consentOnScroll": false,
		"cookiePolicyId": "{{ data_get($site_settings,'iubenda_code_'.LaravelLocalization::getCurrentLocale()) }}"
	};
</script>
<script type="text/javascript" src="//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js" charset="UTF-8" async></script>
