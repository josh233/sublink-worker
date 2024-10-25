export const SITE_RULE_SET_BASE_URL = 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/';
export const IP_RULE_SET_BASE_URL = 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/';
// Custom rules
export const CUSTOM_RULES = [];
// Unified rule structure
export const UNIFIED_RULES = [
	{
		name: 'Ad Block',
		outbound: '🛑 广告拦截',
		site_rules: ['category-ads-all'],
		ip_rules: []
	},	
	{
		name: 'OpenAI',
		outbound: '🤖 openai',
		site_rules: ['openai'],
		ip_rules: []
	},
	{
		name: 'Anthropic-Claude',
		outbound: '🤖 Anthropic-Claude',
		site_rules: ['anthropic'],
		ip_rules: []
	},
	{
		name: 'Jetbrains-AI',
		outbound: '🤖 Jetbrains-ai',
		site_rules: ['jetbrains-ai'],
		ip_rules: []
	},	
	{
		name: 'Perplexity',
		outbound: '🤖 Perplexity',
		site_rules: ['perplexity'],
		ip_rules: []
	},	
	{
		name: 'Google-Gemini',
		outbound: '🤖 Google-Gemini',
		site_rules: ['google-gemini'],
		ip_rules: []
	},
	{
		name: 'Bilibili',
		outbound: '📺 哔哩哔哩bilibili',
		site_rules: ['bilibili'],
		ip_rules: []
	},
	{
		name: 'Youtube',
		outbound: '📹 Youtube',
		site_rules: ['youtube'],
		ip_rules: []
	},
	{
		name: 'Google',
		outbound: '🔍 Google',
		site_rules: ['google'],
		ip_rules: ['google']
	},
	{
		name: 'Azure',
		outbound: '☁️ 云服务 Azure',
		site_rules: ['azure'],
		ip_rules: []
	},
	{
		name: 'Microsoft',
		outbound: '🪟 Microsoft-Bing-Copilot-Azure',
		site_rules: ['microsoft'],
		ip_rules: []
	},
	{
		name: 'Apple',
		outbound: '🍏 苹果服务-Apple',
		site_rules: ['apple'],
		ip_rules: []
	},
	{
		name: 'zoom',
		outbound: '🎦 zoom',
		site_rules: ['zoom'],
		ip_rules: []
	},
	{
		name: 'Telegram',
		outbound: '💬 telegram',
		site_rules: ['telegram'],
		ip_rules: ['telegram']
	},
	{
		name: 'Signal',
		outbound: '💬 signal',
		site_rules: ['signal'],
		ip_rules: []
	},
	{
		name: 'Discord',
		outbound: '💬 Discord',
		site_rules: ['discord'],
		ip_rules: []
	},
	{
		name: 'line',
		outbound: '💬 line',
		site_rules: ['line'],
		ip_rules: []
	},
	{
		name: 'Reddit',
		outbound: '👾 reddit',
		site_rules: ['reddit'],
		ip_rules: []
	},
	{
		name: 'twitch',
		outbound: '📹 twitch',
		site_rules: ['twitch'],
		ip_rules: []
	},
	{
		name: 'Github-Gitlab',
		outbound: '🐱 Github-Gitlab',
		site_rules: ['github', 'gitlab'],
		ip_rules: []
	},

	{
		name: 'twitter-x',
		outbound: '🌐 twitter-x',
		site_rules: ['twitter','x'],
		ip_rules: ['twitter']
	},
	{
		name: 'Instagram-threads',
		outbound: '🌐 instagram-threads',
		site_rules: ['instagram','threads'],
		ip_rules: []
	},
	{
		name: 'Facebook',
		outbound: '🌐 Facebook',
		site_rules: ['facebook'],
		ip_rules: ['facebook']
	},
	{
		name: 'Linkedin',
		outbound: '🌐 Linkedin',
		site_rules: ['linkedin'],
		ip_rules: []
	},
	{
		name: 'Tiktok',
		outbound: '🎶 tiktok',
		site_rules: ['tiktok'],
		ip_rules: []
	},
	{
		name: 'Netflix',
		outbound: '🎬 netflix',
		site_rules: ['netflix'],
		ip_rules: ['netflix']
	},
	{
		name: 'Hulu',
		outbound: '🎬 hulu',
		site_rules: ['hulu'],
		ip_rules: []
	},
	{
		name: 'Disney',
		outbound: '🎬 disney',
		site_rules: ['disney'],
		ip_rules: []
	},
	{
		name: 'hbo',
		outbound: '🎬 hbo',
		site_rules: ['hbo'],
		ip_rules: []
	},
	{
		name: 'Prime Video',
		outbound: '🎬 Prime Video',
		site_rules: ['primevideo'],
		ip_rules: []
	},
	{
		name: 'steam',
		outbound: '🎮 游戏平台-steam',
		site_rules: ['steam'],
		ip_rules: []
	},
	{
		name: 'Epicgames',
		outbound: '🎮 游戏平台-epicgames',
		site_rules: ['epicgames'],
		ip_rules: []
	},
	{
		name: 'ea',
		outbound: '🎮 游戏平台-ea',
		site_rules: ['ea'],
		ip_rules: []
	},
	{
		name: 'ubisoft',
		outbound: '🎮 游戏平台-ubisoft',
		site_rules: ['ubisoft'],
		ip_rules: []
	},
	{
		name: 'blizzard',
		outbound: '🎮 游戏平台-blizzard',
		site_rules: ['blizzard'],
		ip_rules: []
	},
	{
		name: 'Bahamut',
		outbound: '🎮 巴哈姆特',
		site_rules: ['bahamut'],
		ip_rules: []
	},
	{
		name: 'coursera',
		outbound: '📚 教育资源-coursera',
		site_rules: ['coursera'],
		ip_rules: []
	},
	{
		name: 'edx',
		outbound: '📚 教育资源-edx',
		site_rules: ['edx'],
		ip_rules: []
	},
	{
		name: 'udemy',
		outbound: '📚 教育资源-udemy',
		site_rules: ['udemy'],
		ip_rules: []
	},
	{
		name: 'khanacademy',
		outbound: '📚 教育资源-khanacademy',
		site_rules: ['khanacademy'],
		ip_rules: []
	},
	{
		name: 'category-scholar-!cn',
		outbound: '📚 其他学术资源category-scholar-!cn',
		site_rules: ['category-scholar-!cn'],
		ip_rules: []
	},
	{
		name: 'paypal',
		outbound: '💰 金融服务-paypal',
		site_rules: ['paypal'],
		ip_rules: []
	},
	{
		name: 'visa',
		outbound: '💰 金融服务-visa',
		site_rules: ['visa'],
		ip_rules: []
	},
	{
		name: 'mastercard',
		outbound: '💰 金融服务-mastercard',
		site_rules: ['mastercard'],
		ip_rules: []
	},
	{
		name: 'stripe',
		outbound: '💰 金融服务-stripe',
		site_rules: ['stripe'],
		ip_rules: []
	},
	{
		name: 'wise',
		outbound: '💰 金融服务-wise',
		site_rules: ['wise'],
		ip_rules: []
	},
        {
		name: 'aws',
		outbound: '☁️ 云服务 aws',
		site_rules: ['aws'],
		ip_rules: []
	},

	{
		name: 'Oracle',
		outbound: '☁️ oracle-java-Cloud-virtualbox',
		site_rules: ['oracle'],
		ip_rules: []
	},
	{
		name: 'digitalocean-vultr',
		outbound: '☁️ digitalocean-vultr',
		site_rules: ['digitalocean','vultr'],
		ip_rules: []
	},
	{
		name: 'Dropbox',
		outbound: '☁️ 云存储 dropbox',
		site_rules: ['dropbox'],
		ip_rules: []
	},
	{
		name: 'heroku',
		outbound: '☁️ 云服务 heroku',
		site_rules: ['heroku'],
		ip_rules: []
	},
	{
		name: 'Speedtest',
		outbound: '♻️ Speedtest',
		site_rules: ['speedtest'],
		ip_rules: []
	},
	{
		name: 'Binance',
		outbound: '₿ 币安',
		site_rules: ['binance'],
		ip_rules: []
	},
	{
		name: 'Ecoin',
		outbound: '₿ 加密货币crypto',
		site_rules: ['category-cryptocurrency'],
		ip_rules: []
	},
	{
		name: 'Private',
		outbound: '🏠 私有局域网-private(必选!)',
		site_rules: ['private'],
		ip_rules: ['private']
	},
	{
		name: 'Location:CN',
		outbound: '🔒 常见国内网站-geolocation-cn(必选!)',
		site_rules: ['geolocation-cn'],
		ip_rules: ['cn']
	},
	{
		name: 'Location:!CN',
		outbound: '🔒 常见非中国网站列表-geolocation-!cn(必选!)',
		site_rules: ['geolocation-!cn'],
		ip_rules: []
	}
];

export const PREDEFINED_RULE_SETS = {
	minimal: ['Location:CN', 'Private', 'Location:!CN'],
	balanced: ['Ad Block', 'Location:CN','Location:!CN', 'Private', 'Google', 'Youtube', 'OpenAI','Google-Gemini', 'Telegram', 'twitter-x', 'Instagram-threads', 'Facebook', 'Apple', 'Microsoft' ,'twitch', 'Tiktok', 'Netflix', 'Disney', 'hbo', 'Prime Video', 'steam'],
	comprehensive: UNIFIED_RULES.map(rule => rule.name)
  };
  


// Generate SITE_RULE_SETS and IP_RULE_SETS from UNIFIED_RULES
export const SITE_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	rule.site_rules.forEach(site_rule => {
		acc[site_rule] = `${site_rule}.srs`;
	});
	return acc;
}, {});

export const IP_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	rule.ip_rules.forEach(ip_rule => {
		acc[ip_rule] = `${ip_rule}.srs`;
	});
	return acc;
}, {});

// Helper function to get outbounds based on selected rule names
export function getOutbounds(selectedRuleNames) {
    if (!selectedRuleNames || !Array.isArray(selectedRuleNames)) {
        return []; // or handle this case as appropriate for your use case
    }
    return UNIFIED_RULES
      .filter(rule => selectedRuleNames.includes(rule.name))
      .map(rule => rule.outbound);
}

// Helper function to generate rules based on selected rule names
export function generateRules(selectedRules = [], customRules = [], pin) {
	if (typeof selectedRules === 'string' && PREDEFINED_RULE_SETS[selectedRules]) {
	  selectedRules = PREDEFINED_RULE_SETS[selectedRules];
	}
  
	if (!selectedRules || selectedRules.length === 0) {
	  selectedRules = PREDEFINED_RULE_SETS.minimal;
	}
  
	const rules = [];
  
	UNIFIED_RULES.forEach(rule => {
	  if (selectedRules.includes(rule.name)) {
		rules.push({
		  site_rules: rule.site_rules,
		  ip_rules: rule.ip_rules,
		  domain_suffix: rule?.domain_suffix,
		  ip_cidr: rule?.ip_cidr,
		  outbound: rule.outbound
		});
	  }
	});
  
	if (customRules && customRules.length > 0 && pin !== "true") {
		customRules.forEach((rule) => {
		  rules.push({
			site_rules: rule.site.split(','),
			ip_rules: rule.ip.split(','),
			domain_suffix: rule.domain_suffix ? rule.domain_suffix.split(',') : [],
			domain_keyword: rule.domain_keyword ? rule.domain_keyword.split(',') : [],
			ip_cidr: rule.ip_cidr ? rule.ip_cidr.split(',') : [],
			outbound: rule.name
		  });
		});
	}
	else if (customRules && customRules.length > 0 && pin === "true") {
		customRules.reverse();
		customRules.forEach((rule) => {
			rules.unshift({
			  site_rules: rule.site.split(','),
			  ip_rules: rule.ip.split(','),
			  domain_suffix: rule.domain_suffix ? rule.domain_suffix.split(',') : [],
			  domain_keyword: rule.domain_keyword ? rule.domain_keyword.split(',') : [],
			  ip_cidr: rule.ip_cidr ? rule.ip_cidr.split(',') : [],
			  outbound: rule.name
			});
		  });
	}
  
	return rules;
  }


export function generateRuleSets(selectedRules = [], customRules = []) {
  if (typeof selectedRules === 'string' && PREDEFINED_RULE_SETS[selectedRules]) {
    selectedRules = PREDEFINED_RULE_SETS[selectedRules];
  }
  
  if (!selectedRules || selectedRules.length === 0) {
    selectedRules = PREDEFINED_RULE_SETS.minimal;
  }

  const selectedRulesSet = new Set(selectedRules);

  const siteRuleSets = new Set();
  const ipRuleSets = new Set();

  const ruleSets = [];

  UNIFIED_RULES.forEach(rule => {
    if (selectedRulesSet.has(rule.name)) {
      rule.site_rules.forEach(siteRule => siteRuleSets.add(siteRule));
      rule.ip_rules.forEach(ipRule => ipRuleSets.add(ipRule));
    }
  });
  


  const site_rule_sets = Array.from(siteRuleSets).map(rule => ({
    tag: rule,
    type: 'remote',
    format: 'binary',
    url: `${SITE_RULE_SET_BASE_URL}${SITE_RULE_SETS[rule]}`,
    download_detour: '🚀 节点选择',
    update_interval: '1d'
  }));

  const ip_rule_sets = Array.from(ipRuleSets).map(rule => ({
    tag: `${rule}-ip`,
    type: 'remote',
    format: 'binary',
    url: `${IP_RULE_SET_BASE_URL}${IP_RULE_SETS[rule]}`,
    download_detour: '🚀 节点选择',
    update_interval: '1d'
  }));

  if(customRules){
	customRules.forEach(rule => {
		if(rule.site!=''){
			rule.site.split(',').forEach(site => {
				site_rule_sets.push({
					tag: site.trim(),
					type: 'remote',
					format: 'binary',
					url: `${SITE_RULE_SET_BASE_URL}${site.trim()}.srs`,
					download_detour: '🚀 节点选择',
					update_interval: '1d'
				});
			});
		}
		if(rule.ip!=''){
			rule.ip.split(',').forEach(ip => {
				ip_rule_sets.push({
					tag: `${ip.trim()}-ip`,
					type: 'remote',
					format: 'binary',
					url: `${IP_RULE_SET_BASE_URL}${ip.trim()}.srs`,
					download_detour: '🚀 节点选择',
					update_interval: '1d'
				});
			});
		}
	});
	}

  ruleSets.push(...site_rule_sets, ...ip_rule_sets);

  return { site_rule_sets, ip_rule_sets };
}

// Singbox configuration
export const SING_BOX_CONFIG = {
	log: {
		disabled: false,
		level: 'info',
		timestamp: true,
	},
	dns: {
		servers: [
			{ tag: 'remote_cf', address: 'https://one.one.one.one/dns-query', address_resolver: 'dns_resolver'},
		        {tag: 'remote_google',address: 'https://dns.google/dns-query',address_resolver: 'dns_resolver'},
			{ tag: 'dns_direct', address: 'https://doh.pub/dns-query', address_resolver: 'dns_resolver', detour: 'DIRECT' },
			{ tag: 'dns_fakeip', address: 'fakeip' },
			{ tag: 'dns_resolver', address: 'https://223.5.5.5/dns-query', detour: 'DIRECT' },
			{ tag: 'block', address: 'rcode://success' }
		],
		rules: [
			{ outbound: ['any'], server: 'dns_resolver' },
			{ rule_set: ['geolocation-cn'], server: 'dns_direct' },
			{type: "logical",mode: "and",rules: [{rule_set: "geolocation-!cn",invert: true},{rule_set: "cn-ip"}],server: "remote_google",client_subnet: "114.114.114.114/24"}
		],
		final: 'remote_cf',
		"disable_cache": false,
                "disable_expire": false,
                "independent_cache": false,
                "reverse_mapping": false,
		fakeip: {
			enabled: true,
			inet4_range: '198.18.0.0/15',
			inet6_range: "fc00::/18"
		}
	},
	ntp: {
		enabled: true,
		server: 'time.windows.com',
		server_port: 123,
		interval: '30m',
		detour: 'DIRECT'
	},
	inbounds: [
		{ type: 'tun', tag: 'tun-in', inet4_address: '172.19.0.1/30', "inet6_address": "fdfe:dcba:9876::1/126",auto_route: true, strict_route: true, stack: 'gvisor', sniff: true,"sniff_override_destination": true,"domain_strategy": "prefer_ipv4"},
	        {
	              type: "mixed",
	              listen: "0.0.0.0",
	              listen_port: 7890,
	              tcp_fast_open: false,
	              tcp_multi_path: false,
	              udp_fragment: false,
	              sniff: true,
	              sniff_override_destination: true,
	              domain_strategy: 'prefer_ipv4',
	              set_system_proxy: false
               }
	],
	outbounds: [
		{ type: 'direct', tag: 'DIRECT' },
		{ type: 'block', tag: 'REJECT' },
		{ type: 'dns', tag: 'dns-out' }
	],
	route : {
	},
	experimental: {
		cache_file: {
			enabled: true,
			store_fakeip: true
		},
		clash_api: {
			external_controller: '127.0.0.1:9191',
			external_ui_download_url: 'https://github.com/MetaCubeX/Yacd-meta/archive/gh-pages.zip',
			external_ui_download_detour: '🚀 节点选择',
			external_ui: 'dashboard',
			default_mode: 'rule'
		}
	}
};

export const CLASH_CONFIG = {
	'mixed-port': 7890,
	'socks-port': 7891,
	'redir-port': 7892,
	'tproxy-port': 7893,
	'allow-lan': true,
	'bind-address': "*",
	mode: 'Rule',
	ipv6: true,
	'log-level': 'info',
	'global-client-fingerprint': 'chrome',
	sniffer: {
                enable: true,
		'force-dns-mapping': true,
		'override-destination': true
	},
	dns: {
		enable: true,
		'enhanced-mode': 'redir-host',
		'respect-rules': true,
		'default-nameserver': ['https://223.5.5.5/dns-query', 'https://1.12.12.12/dns-query'],
		nameserver: ['https://dns.alidns.com/dns-query', 'https://doh.pub/dns-query'],
		fallback: ["'https://1.1.1.1/dns-query#🚀 节点选择'"],
		'proxy-server-nameserver':['https://dns.alidns.com/dns-query', 'https://doh.pub/dns-query']
	},
	proxies: [],
	'proxy-groups': [],
};
