import requests

url =  "https://apissl.ksapisrv.com/rest/photo/like?mod=samsung%28SM-N960F%29&lon=108.567809&country_code=CN&kpn=KUAISHOU&oc=GENERIC&egid=DFP842F39F36A6997F407E6EC011E54523D887E676A7BF550BB39A00F8E6EB81&hotfix_ver=&sh=1600&appver=6.9.2.11245&max_memory=128&isp=CMCC&browseType=1&kpf=ANDROID_PHONE&did=ANDROID_4c1d96d144ad9668&net=WIFI&app=0&ud=1222084156&c=GENERIC&sys=ANDROID_5.1.1&sw=900&ftt=&language=zh-cn&iuid=&lat=30.998763&did_gt=1587967311124&ver=6.9"

url = "https://apis2.ksapisrv.com/rest/photo/like?mod=samsung%28SM-N960F%29&lon=108.567809&country_code=CN&kpn=KUAISHOU&oc=GENERIC&egid=DFP16863507F58375C1E2BB942E29871964A9F84EC7038A5835B26F0E00B6DE3&hotfix_ver=&sh=1600&appver=6.9.2.11245&max_memory=128&isp=CMCC&browseType=1&kpf=ANDROID_PHONE&did=ANDROID_4c1d96d144ad9668&net=WIFI&app=0&ud=1222084156&c=GENERIC&sys=ANDROID_5.1.1&sw=900&ftt=&language=zh-cn&iuid=&lat=30.998763&did_gt=1587967311124&ver=6.9"
#data = "user_id=1459796743&photo_id=5199968747849175101&cancel=0&referer=ks%3A%2F%2Fphoto%2F1459796743%2F5199968747849175101%2F3%2F1_i%2F2000064359143900481_l0%23like&exp_tag0=&exp_tag=1_i%2F2000064359143900481_l0&serverExpTag=feed_photo%7C5199968747849175101%7C1459796743%7C1_i%2F2000064359143900481_l0&expTagList=CkkKRGZlZWRfcGhvdG98NTE5OTk2ODc0Nzg0OTE3NTEwMXwxNDU5Nzk2NzQzfDFfaS8yMDAwMDY0MzU5MTQzOTAwNDgxX2wwEgEx&photoinfo=_%2F_&__NStokensig=4f3969ca5f498b474be87f39bc0e6dcff7e3d20afe2b18a9bed578090382c274&kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAGRGiDLs2ObtxL4aBSmC5xsESvNlLA4d8cwctvhpmkshRmUxakngsnjN9HJTcY41no-4BxoEpaKaHrejwiml1FBgwFAwank35y96WM49hCaFq0Nl2jiIlCJZMmJ014aMx4O59cNnMcY1_1X1hYJsgZF3wJwTEnc6BLxKcqcrrf6HHL3QiWQkT5EIBrAuvIDyy8udVSEiHrbMx5Gqhol0zpFGhJrNN-fL8lNH4AKLNFPdkh-L7kiIN6YoIUApaUb8l0NETr3rJ0n4Eveat783CsuFxo1Df6sKAUwAQ&token=b5b832d5addd48c5889ee2b35d91a13d-1222084156&client_key=3c2cd3f3&os=android&sig=03d4dde570a742a43f06c09718511b25"
data= {
'user_id':	'100928655',
'photo_id':	'5202783501084001696',
'cancel':	'0',
'referer'	:'ks://photo/100928655/5202783501084001696/3/1_i/2000073880626833714_p0#like',
'exp_tag0'	:'',
'exp_tag':	'1_i/2000073880626833714_p0',
'serverExpTag':	'feed_photo|5202783501084001696|100928655|1_i/2000073880626833714_p0',
'expTagList':	'CkgKQ2ZlZWRfcGhvdG98NTIwMjc4MzUwMTA4NDAwMTY5NnwxMDA5Mjg2NTV8MV9pLzIwMDAwNzM4ODA2MjY4MzM3MTRfcDASATE=',
'photoinfo':	'100928655/_',
'__NS_sig3'	:'2201764759c6862dc0646487618287976d4c5c7f3d',
'__NStokensig':	'63b1ac2825f771178e1b1294cb12cc479b97412df63ff005edee03451c5bb904',
'kuaishou.api_st':	'Cg9rdWFpc2hvdS5hcGkuc3QSoAHkJlS_ajLHzGDzSJPxFhQuzQADae96bRnP4uDzr__YYLvjhUhagLtUUWCHlwBeDHWEzTQH00CdeTQLal6PJIWRcDXOoxs3lMZePlE6EYLdKNJMM0HHBf6kSRNuQ3I0FrvR3zbLU24GVWKf2fNFjqL2g-OdFOZ2MBp7xyk2L0Mz68QPo5dc16Tsweh6Mg0c8ZUJpVUax3Z_JK1q2GdRYHG_GhJPQv6ZTt1N5roF-otIWYG6ZJsiIPILxRzEZTkasZ6Mzmi9hDXDVjBd-B2zDUMm8iU25cEVKAUwAQ',
'token':	'b5b832d5addd48c5889ee2b35d91a13d-1222084156',
'client_key':	'3c2cd3f3',
'os':	'android',
'sig':	'86ed1024b6c44243c44af8e888848b2e'

}

data1 = {'user_id': '100928655',
'photo_id': '5192650403600643149',
'cancel': '0',
'referer': 'ks://photo/100928655/5192650403600643149/3/1_i/2000073880626833714_p0#like',
'exp_tag0': '',
'exp_tag': '1_i/2000073880626833714_p0',
'serverExpTag': 'feed_photo|5192650403600643149|100928655|1_i/2000073880626833714_p0',
'expTagList': 'CkgKQ2ZlZWRfcGhvdG98NTIwMjc4MzUwMTA4NDAwMTY5NnwxMDA5Mjg2NTV8MV9pLzIwMDAwNzM4ODA2MjY4MzM3MTRfcDASATE=',
'photoinfo': '100928655/_',
'__NS_sig3': '2201764019c6a4fb0db68cf88b39960dd4fba2d1f8',
'__NStokensig': 'c9ed7a5f1b8e99e5ede968f2aa68ae82af086b4a1973940e8210228c862c6b79',
'kuaishou.api_st': 'Cg9rdWFpc2hvdS5hcGkuc3QSoAHkJlS_ajLHzGDzSJPxFhQuzQADae96bRnP4uDzr__YYLvjhUhagLtUUWCHlwBeDHWEzTQH00CdeTQLal6PJIWRcDXOoxs3lMZePlE6EYLdKNJMM0HHBf6kSRNuQ3I0FrvR3zbLU24GVWKf2fNFjqL2g-OdFOZ2MBp7xyk2L0Mz68QPo5dc16Tsweh6Mg0c8ZUJpVUax3Z_JK1q2GdRYHG_GhJPQv6ZTt1N5roF-otIWYG6ZJsiIPILxRzEZTkasZ6Mzmi9hDXDVjBd-B2zDUMm8iU25cEVKAUwAQ',
'token': 'b5b832d5addd48c5889ee2b35d91a13d-1222084156',
'client_key': '3c2cd3f3',
'os': 'android',
'sig': 'ded6d2d9441ca2f8b087eadeea1b640c',
}

data3 = {'user_id': '100928655',
'photo_id': '5202783501084001696',
'cancel': '0',
'referer': 'ks://photo/100928655/5202783501084001696/3/1_i/2000073880626833714_p0#like',
'exp_tag0': '',
'exp_tag': '1_i/2000073880626833714_p0',
'serverExpTag': 'feed_photo|5202783501084001696|100928655|1_i/2000073880626833714_p0',
'expTagList': 'CkgKQ2ZlZWRfcGhvdG98NTIwMjc4MzUwMTA4NDAwMTY5NnwxMDA5Mjg2NTV8MV9pLzIwMDAwNzM4ODA2MjY4MzM3MTRfcDASATE=',
'photoinfo': '100928655/_',
'__NS_sig3': '2201764759c6862dc0646487618287976d4c5c7f3d',
'__NStokensig': '63b1ac2825f771178e1b1294cb12cc479b97412df63ff005edee03451c5bb904',
'kuaishou.api_st': 'Cg9rdWFpc2hvdS5hcGkuc3QSoAHkJlS_ajLHzGDzSJPxFhQuzQADae96bRnP4uDzr__YYLvjhUhagLtUUWCHlwBeDHWEzTQH00CdeTQLal6PJIWRcDXOoxs3lMZePlE6EYLdKNJMM0HHBf6kSRNuQ3I0FrvR3zbLU24GVWKf2fNFjqL2g-OdFOZ2MBp7xyk2L0Mz68QPo5dc16Tsweh6Mg0c8ZUJpVUax3Z_JK1q2GdRYHG_GhJPQv6ZTt1N5roF-otIWYG6ZJsiIPILxRzEZTkasZ6Mzmi9hDXDVjBd-B2zDUMm8iU25cEVKAUwAQ',

'token': 'b5b832d5addd48c5889ee2b35d91a13d-1222084156',
'client_key': '3c2cd3f3',
'os': 'android',
'sig': '86ed1024b6c44243c44af8e888848b2e',
}

req = requests.post(url=url,data=data3)
print(req.text)