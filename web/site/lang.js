var arrLang = {
	'en': {
		'EBan List Link': 'EBan List',
		'Go Back Link': 'Go Back',
		'Find': 'Find',
		'Steam Wrong': 'SteamID is in the wrong format. Supported formats: STEAM_1:0:123456789 and [U:1:123456789]',
		'Search Results': 'Search Results',
		'Server': 'Server',
		'Player': 'Player',
		'Reason': 'Reason',
		'Admin': 'Admin',
		'Duration': 'Duration',
		'Permanent': 'Permanent',
		'Permanent Removed': 'Permanent(Removed)',
		'Expired': 'Expired',
		'Removed': 'Removed',
		'Week_1': 'Week',
		'Week_2': 'Weeks',
		'Week_3': 'Weeks',
		'Day_1': 'Day',
		'Day_2': 'Days',
		'Day_3': 'Days',
		'Hour_1': 'Hour',
		'Hour_2': 'Hours',
		'Hour_3': 'Hours',
		'Minute_1': 'Minute',
		'Minute_2': 'Minutes',
		'Minute_3': 'Minutes',
		'Issued': 'Issued:',
		'Removed_2': 'Removed:',
		'Unbanned by': 'Unbanned by:',
		'Reason_2': 'Reason:',
		'Never': 'Never'
	},
	'zh': {
		'EBan List Link': 'Eban列表',
		'Go Back Link': '返回',
		'Find': '查询',
		'Steam Wrong': 'SteamID格式错误. 支持的格式: STEAM_1:0:123456789 和 [U:1:123456789]',
		'Search Results': '搜索结果',
		'Server': '服务器',
		'Player': '玩家',
		'Reason': '原因',
		'Admin': '管理员',
		'Duration': '持续时间',
		'Permanent': '永远',
		'Permanent Removed': '永远（删除）',
		'Expired': '到期',
		'Removed': '移除',
		'Week_1': '周',
		'Week_2': '周',
		'Week_3': '周',
		'Day_1': '天',
		'Day_2': '天',
		'Day_3': '天',
		'Hour_1': '小时',
		'Hour_2': '小时',
		'Hour_3': '小时',
		'Minute_1': '分钟',
		'Minute_2': '分钟',
		'Minute_3': '分钟',
		'Issued': '发布:',
		'Removed_2': '到期:',
		'Unbanned by': '未被禁止:',
		'Reason_2': '原因:',
		'Never': '未曾'
	}
};

function SetLang(lang)
{
	$('.lang').each(function(index, element){
		$(this).text(arrLang[lang][$(this).attr('key_phrase')]);
	});
}