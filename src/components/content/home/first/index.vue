<template>
    <div class="discount-product-page">
        <div class="content">
            <div class="head-image">
                <img src="https://sr.aihuishou.com/sos/image/637072749752603240764426616.png?x-oss-process=image/quality,q_80&size=750x200" alt="">
                <div class="bg-color" style="background-color: rgb(255, 144, 30);"></div>
            </div>
            <!-- /////////////// -->
            <div class="coupon-container">
                <dl>
                    <dt>
                        <div class="coupon-image"><p><i>￥</i><span>60</span></p></div>
                        <div class="device-info no-product-info">
                            <a href="#" class="product-info no-product"><p>选择机型查看优惠</p></a>
                            <div class="product-price-info">
                                <span>最高加价:</span>
                                <p class="price"><i>￥</i><span>60</span></p>
                            </div>
                        </div>
                    </dt>
                    <dd>
                        <div class="time-container">
                            <p class="time-down">
                                <van-count-down
                                    :time="time"
                                    format="DD 天 HH 时 mm 分 ss 秒"
                                 />
                                <!-- <span>03</span><i>天</i>
                                 <span>03</span><i>时</i>
                                  <span>03</span><i>分</i>
                                  <span>03</span><i>秒</i> -->
                            </p>
                            <i class="rule"></i>
                        </div>
                        <div @click="clickHandler()" class="recycle-button">立即回收</div>
                    </dd>
                </dl>
            </div>
            <!-- //////////// -->
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/6369162687464023901904800109.png?x-oss-process=image/quality,q_80&size=750x100" alt=""></div>
            </div>
            <div class="sos-navigators-container">
                <div><img src="https://sr.aihuishou.com/sos/image/636915304029273240688456435.png?x-oss-process=image/quality,q_80&size=142x142" alt=""><span>卖手机</span></div>
                <div><img src="https://sr.aihuishou.com/sos/image/6369153041238368801628141271.png?x-oss-process=image/quality,q_80&size=142x142" alt=""><span>卖笔记本</span></div>
                <div><img src="https://sr.aihuishou.com/sos/image/636915304203160180355749842.png?x-oss-process=image/quality,q_80&size=142x142" alt=""><span>卖平板</span></div>
                <div><img src="https://sr.aihuishou.com/sos/image/636915304278953410260135749.png?x-oss-process=image/quality,q_80&size=142x142" alt=""><span>摄影摄像</span></div>
                <div><img src="https://sr.aihuishou.com/sos/image/636915304338106990270685409.png?x-oss-process=image/quality,q_80&size=142x142" alt=""><span>智能数码</span></div>
            </div>
            <!-- //////////// -->
            <div @click="clickHandler()" class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/6367657649175868001951108153.png?x-oss-process=image/quality,q_80&size=750x152" alt=""></div>
            </div>
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/6369153144225446201046201211.png?x-oss-process=image/quality,q_80&size=750x120" alt=""></div>
            </div>
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/637015655122542250737729988.png?x-oss-process=image/quality,q_80&size=1125x240" alt=""></div>
            </div>
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/637086625979481740447561084.png?x-oss-process=image/quality,q_80&size=564x360" alt=""></div>
                <div><img src="https://sr.aihuishou.com/sos/image/6370156460103741902031714725.png?x-oss-process=image/quality,q_80&size=562x360" alt=""></div>
            </div>
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/6369153154777424901322365757.png?x-oss-process=image/quality,q_80&size=750x120" alt=""></div>
            </div>
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/637050196467569760130834693.png?x-oss-process=image/quality,q_80&size=561x360" alt=""></div>
                <div><img src="https://sr.aihuishou.com/sos/image/6370501966139021602096631161.png?x-oss-process=image/quality,q_80&size=564x360" alt=""></div>
            </div>
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/636916318586896200533901957.png?x-oss-process=image/quality,q_80&size=561x342" alt=""></div>
                <div><img src="https://sr.aihuishou.com/sos/image/6369163186592548101156564608.png?x-oss-process=image/quality,q_80&size=564x342" alt=""></div>
            </div>
            <div class="sos-images-container">
                <div><img src="https://sr.aihuishou.com/sos/image/636987880394289280980121688.png?x-oss-process=image/quality,q_80&size=1125x810" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            time: 30 * 60 * 60 * 1000
        }
    },
    methods:{
        clickHandler(){
      this.$router.push("/category")

        }
    }
}
</script>

<style scoped>
.discount-product-page {
    position: relative;
    margin-bottom: .1rem;
}
.discount-product-page .content {
    position: relative;
}
.discount-product-page .content .head-image img {
    display: block;
    width: 100%;
}
.discount-product-page .content .bg-color {
    position: absolute;
    height: .7rem;
    width: 100%;
}
.discount-product-page .content .coupon-container {
    box-shadow: 0 .01rem .2rem rgba(207,213,215,.3);
    width: 3.43rem;
    margin: 0 auto;
}
.discount-product-page .content .coupon-container>dl {
    background-color: #fff;
    position: relative;
    border-radius: .04rem;
}
.discount-product-page .content .coupon-container>dl dt {
    height: .9rem;
    display: flex;
    align-items: center 
}
.discount-product-page .content .coupon-container>dl dt .coupon-image {
    width: 1.08rem;
    height: 100%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABwCAYAAADfR9ioAAAUtUlEQVR4Xu2dB5gURRbHf70kyUgyYSALZiVIhgWWrDiSYckoioFDkggoBhAQCZIOTHfiGTCAIiIoIAqHKIiKyCGKeAZQlLjkpe97WxN7pqd7hl227q7r+/Zjd6bCv97713uvXlU3BgkU88DBz4AbEmjiVc1lCRjFixmJQEioskeIRESrR12PEHroQRsUHiG0UYUeQDxC6KEHbVB4hNBGFXoA8Qihhx60QeERQhtV6AHEI4QeetAGhUcIbVShBxCPEHroQRsUHiG0UYUeQDxC6KEHbVB4hNBGFXoA8Qihhx60QeERQhtV6AHEI4QeetAGhUcIbVShBxCPEHroQRsUHiG0UYUeQDxC6KEHbVB4hNBGFXoA8Qihhx60QeERQhtV6AHEI4QeetAGhUcIbVShBxCPEHroQRsUHiG0UYUeQDxC6KEHbVB4hNBGFXoA8Qihhx60QeERQhtV6AHEI4QeetAGhUcIbVShBxCPEHroQRsUHiG0UYUeQDxC6KEHbVB4hNBGFXoA8Qihhx60QeERQhtV6AHEI4QeetAGhUcIbVShBxCPEHroQRsUHiG0UYUeQDxC6KEHbVDkGCHMjnUKMuONLylUuJI2s/WAOEtg4E1ljJdW73WuqGo4vvzcTEsrTLHMgWAOZcyU87msotu+vXo6SKBf+wxgLsbpJ4yFq3c7QbIlhHlTvaIUKDAI0xwCRpmsjsZMwSOEk0g1+75fez8g8yikzMcwJxkLV/5shzKKEGb7xiXIa9wNxmCgZERDjxCaadsFnCAhArzgOCk8SyYTjTdW7rL2EEEIs1PqAE7zeBQRAq08QrjQgGZVrIQIwTuOwVTOPTDWmLfxZODjICHMDk1ngXln3Ol4hNBM2y7g2BPC39hYzfH9bYy3Nx4JBpVmh9ShwGTH7j1COIpIuwqOhMhC/LLx2squWYQwfY3LkZKyHSjoOBmPEI4i0q6CO0II7BbGayuXG2aH1EeA0a4m4hHClZi0quSeEO8ar61sLYRw/z/teYTQSteuwLgnxHGM3cWEEAeBoq469wjhSkxaVXJPCMhjVBVCnHaTscyapEcIrXTtCkxChOAGIYTpqmOPEK7FpFXFRAhhmDUMs8/NJocOuZuDZyHcyUmnWm4JUagg5MvXzDDvH2By8iTs2w8HD4EZx2B4hNBJ1e6wOBGiSGE4twScc47o32eYI/qHGJCZCfsPwMGDcFpCC0vxCOFOCTrVsiNE0SKKCPnyh9AePuwzzOH9ok2CkEFIceAgCEkCxSOETqp2hyWcEIYBxYpC8eKQN290+4wMn2EO62vvI8R9HDoMBw7AqVPeLsOdCvSqJYRISVFEKFYc8qTY4zt0xGeYQ8MJESd+OJwBPe6Eq67Xa8IemjgKPgDjBkPRoooUTuWwEOK+3qaLi1OhrqpcCfWawcXlnbr3vs8tCfz5O6xbCV9sgMxTcVAEDID/0DtDYoghQgh/sTMQse5VXVoZ6jeDipeD+Cav5L4Edv8EH78PWzeDGWNTYNWzVW1HJIb4Sy8TC1GCFsO6BbV2IO0uKAcN0qDaNe7MUu6L7X8Pwa7v4KPlsGOrmptTqjGWHqXdMXEZ9/Yyg1dtozpy6jlMtqXKKotxTa3YEez/nhpyd0ayWL/9GtasgB+/i40loPigGm0seeDjDCHEPT3NaEo5uYAokxICVKwE1E2FmvUgf4HcFVqs0Y8dhb274c/fYN8fsirg+HG1rAqcA+cUhBKloWRZKHO++lunIimBLZuURdj9i0tkcfQVblKOHvMZ5t3pCZgBl+NLtUKFoXYjqNNY/Z6bRYKsndvhp53w+68x/KuNDZXYqMwFUK4ClK8CJdXl81wpp07CpvUqRvjT9WMWiUE9JoS4q0fOECIARaxEzfpQrykUL5EYwDOpLSt/+xb1s3fPmfQUalv6fJBdlvycLctx/Bh8sgbWrYJDB7JnHna9HBeXMah7cruM8E6dLJLUzZMXrqsNDZtD6fNybmJiDWS79a+vVDItZrEADvpa69qwcZ2S5bv8ari2NpQolTNzOXxIkWD9h8qtxStu5O8G5dGjPsO8o5tpu20M7jLimNS4QC0CFhMsP1dcB41bwEWXuIHprs7un+GT1fDDjhj1XSra3UihMF7mUqEq1G6s4o3sKPv/gDXvw2fr4ITENlKyUf7SXVAc/l8CaYNjQoiB3XLWZcQTUpXq0LglVKySvCj3/KKSMN/LPWHrUnE5tYBArIIKorKG6xYFyZ+Vq6tgWnZbyZQ9v8KH78HmTyPPj5LpK9k2JySGuL1rtNSCAnIp0GQBBNpdUgGatITqV7tPcu3fB2uWwbYtLiyCtUrUfsxSwe0uK9DMX1/kduX1yi0WdncrkR93wqplsPWL0NWDsy3/wDROHvcZ5m1dwlLXZ4kAUSr0C/T8C5TFuLYm5MkTm2YSZIlv/XQtZAYfOHJJSf848e58RFjoRInhhyGBdJ0mUKuBfU5m+1ZFhB3bwlxCLsv/mBBiQOcYKBxMZECgUSlrpwk5rUy/QEuWhkZpUKte6LxexvxqI7z/DmQ43fCyG8dOwW5xB3jnsv65JaFFe6hcTTWUdPKWzfDBu/DTD3FInEvyPy4uo38MQtgq3OVCPNNqgfGLFoOGzUBijfeXgKRos4qTwu2CSCdF+rt3jEETHL/6tXDRxfDRKvjd8Yn8aNdxpvJ02z4rhujbyT517UDUhGM4uxx6PPnmyyd3/fwksFOoS8vjVjB2Ls32kMDF+AL95InIrbBTDHy25Z8VQ/Tp6HLZJC3N6IYu5Jd1fp8/n8sg002H8fCfxfaSepY7rGIFz77k4xvYzBM+w+zdIcZ9CLdI7ZZ8ouQJ60d+FTLECirtou8z1mcg2HSIEbJz/FOZcDpwPTFZOSbbzmbXdVII0UsIkWCwFKVvR6fr1jmrK17/L/crxEpkht9bcFqIboPiJOudOukzzJ63OqFIdLknVz9rDoH9vAN/cjqUSDBmDE44WUvltA1OTqKJt8o85TPMdF/uE0IXgSQuwmxsIWn9bOwuma5OZ/oMs/stMTKVlhWaqKtyu5vICqxOR2ecE52M211mEJdlKVuj/dwcPyVP9K46p+RvnWemuIxu7eNkKp1sp13s4UR18Z0SVMW493dZBZXd2yFnE9lQJEAtUxb2xNj/y+eSPNou2UKXRY7wCxWCX8Mup1x+BVx6Gbz3TqiT0mWg7HmwNVZq3WEsCaizbknnoPwjIPjHOS2E6CqEOItFSCCXPezcxLDR6vmBMcOyB9TV18Poh2HkYPg+7CRUVuLU2VDuEnjkAdi8yd14dw2B8hVh6F2hOQwervqRzwJl4D2q3oh73fVrrSWECOZfkusi4VamxBBdbj57hJD9dxYZLFDDF8LIsYoQo+5LeD4xG9w9BK66Fgb2gtNhA7dqB117wuefQYWKMOROOBnvyrq/d1n5c56FOTNg5Qr14TMvwvq1MH+2+rtiZZg0HR4bC5vkfSwOxdYQGFCgwFm8vCwxROebcp4QYg2OHXd4RsAvtFEPKUKM/Eu0FMXEX3l1bOlu/BQOWm4USer7uZfglRdh4T9C7S68CKbNhWfmwto18Nfn1b+zp9trrnBhKFREfd+hs3rUcflSKFkKpsyEuU/BJ+vU9/UbgbiRp/0EyciAI/JC2SSLkCLLWuRwOX3aZ5idwggRPMPIxoFln330iGW/bem/6uWQP7+yHL36QeEikcqRE06JKeo2gDHySqwYZfCdsM1/DT3wdY9e0CUd0jvBvj/VpzLOkzPh6DEYMVjFMXXrq35nTYMli6M7lxXcvTf06J2cYBY8D/JjV5y2q/K9EEKu7TmFZ24QBoNoS2emEKJjuxjPZfh7dco3WW9UWScmN36OHo3/igEZasFCOC/OjaNdP0D/dKjXEB56DG5tCxmHVQJLgtA5z8A9A+Gbr0PikGDxuRdhzx643a9IEaq0r1IN7ugLe38P1Rcidu+liLjo9WixitWSh2TDi6zcydPh44/gVbFANsZWLJc8H3umRYJNsVSBLK6T/APjOZEoSBAJKm9tG+e5jGRnYIKYyazr7TGKVW4XXaTuXEoZMlz9/sR49Xd6H+WT+3ZXpvjhCdCuuepfivj/p1+AQQMiCTFyDKS1gu92wICe6v0Ho8fBDTVhxH3wxeeRwIRcg+4FX0el3KfnOt9c6poOvftBj07w+2/uheXkpOMpUHAWKRL5GL+T5bF+b7fQDQkqfW2c4LmfqNTMepXAAXcBWqyeZ81TK/fBB0IEueY66NUVGjaGRydCq9QQISpWUpbgjn7wtX+LJ/UeeRwOH4bfdsPokardxZfAqKFqIe/aCb+FKfHGOvDHH9CgkXJb0pfU3b8fWreF62tEo63XQJH+sw3OMpLgcukS53pua4hblbe+ZGuRoPKW1nEI4eTcLGhkFyECjJVfcAv8xVfh889h8gTVYsQoFUj27AINm8CEyZDWWLkMKUKIv78Mt/VWSixVGl5cCB99qOKFy8rDvNkw9H4YNUxZkQ/Xw5SJ8NabIVTSRoLCGVPhxrrQuTsMvVcdV7f3Qa0bQ3ULFoTadVQu4l+WHIZYImn/zdbI3MeG9bD4DXdScHLVgV5kLHFlTi4hOKqDPg2JIdq3inPaae0gTgpSTLhYhjO1N0tXwNuLYc5MNY0HHoTLq0F6F2icChOnQGqDECEqVQYhUb+esOUrlTSaPhvuuh3GjFOE6NFZ+d6Am1m7ASY/DovCFPTKG/DPtTBtSnylSWzy5AwoVgwG9o/tKsaOA7Fqt/eLjFPc0SGxWhIXlSxpOR12OuwJDGFJ0aYIIW4WQviL237CIUtgI1YhIOzEphNZW57wWr0WJk2A115R3z30qLICQogmqTB5GjSqG0mIl1+H3j1gy5eqjUTj8sje+ElQvjx07Rg5zvpNMPExeDMseFy4CNathalxXvkt2chpM1XEP6BPZLYyfAS5Uzn5SahUBUYMUUTNySInxKVKnfmjk3lMn2G2axkKKq2g7XL8gc/lPH/v3lDw6PZMwTpOwPDUqAnzn4funUPxwPiJUO5i6NkNUpuq1Vm/NsiDLGIrq1SBV9+Enl3hSz8hAv1PfALKV4BOvtCIYmbXb4Th98HyZepzGf/1t2HdRzBlUrSVK14MBgyEzt3UrkUCyF9s/w8S1ae4Kxlbfl5aAPP/ar/TcHtWETTYFsXI5xJsiqUQS2i3wJ0y4XklhmjbIjkjL/GCCMf26ahYS8LhFKlPPxh0D9xYQ2U0pUyZptjfOx2aNlMrtE4NFTBKqVIVXl+sSPTlF5GDTnoSKlSADsH/VQYuuBCWr4L+veGT9aH6i99R20dxJeFFXNA7y9UuZeYMWLEM7ve/GlwSXJJDWfVBZBshgwS2t/UFuUk+bKRKTLVrqbbh7p1+4nalRAmQn2RKHnEZbYQQMRgnHUadN/gpJpMTMoSnggMrLR4PAt/ZrYj5zyqGi3IDZeZclb4VE92sOcyYDbWuQ71b04CqVWHREujSEb7cHDn6E9OgYkVo3y70eZ268OzfoHUa/LBTfS7TX7IMPl4Dj4+P1ldaS3XWEdiVBOQihJNV2b+P6icwLyHK+6uVq/piM0i6W2KZT/27ESeL4BQk2j1RF2gn29IyZcIuGrmMBfOKy2idlpiF2LdPuYlsLabaEq5YBY+OgwUvhHp//gUVLwy6A5qnway5cP01fpeBWqFvL1VuYbOFEFNnKELc1CbU3+Ah0Lkr1KkZNgMT3l0Ba9bABMmEOmkEuORSeGcZjL4fFi+KlMaVV8Ibb0HzVJCkmmNxu61w7ChUQSzahRfaP98Sq6t8QohWzd0RQli5e7fK4bstUW+gsRG01Bs+EtJ7Ql2JD/zuQMZZvAS++QZGDoO0FjBnHtxwbRghqsJbS+HW9rDZkmyaPlMFpG1aKMSS4XvvAxWfDL47NAsZf/lKWLMaHrNJjYfPWdzI3xYoN3Jz2+htdsvWMGsOXFUtMti2uxqYU489yDUCib8KhL2LMp7u8uMzzJbNoglhdfVyHvHTvyHD+hRyssy2tBNzuvQ9eO1VGDsmlAIuXRr+uQFmTIenZkCLljDv6dhTErcg+YvwMnM2VKoELdPUp+1vgelPwS03waaNYTUN+GAVrF4FjzwcIwUdRmSJSebOU3FN966w7ZvIfuSv8ROgfgNoWN9G/E5yc/o+0K2LerIDEVIULuS8jPMaPsNMaxrnuQwDTpyAXbvs09DOw8SvISx+c7HyeWnNVFq2bz+VNhYCiGlu0Ry+3Q6tWsP8Z2D4UH9wBkjae+QoaNcGPrfcaZg9FyRPkdYUKleGRW/Dhk+gT69oTKvWKEKMezA2XiHA0GHQpRvs/F71IXKR0qu3inNk4VSvDp06w9w57qzNmcrPTXuxTCKnYLDpJ5J14We5jOZNw2hmYdyRI/DDrhg7CUu9qKennVCGIZEXav59AYx/FDZsUNu1l19VJ56ytXt6PqxdqzqscQPcMxgG3gaCTYrEHo+Nh4cfgh2Wdy1Nne6PIdpCjRow9iFI7w4H9vsB+le+/PPs8yromz0resXLJ4Lz5YWw6E147hn1bEWgPDEFJI0tRfIf69bBhPGRri9CJAkG8VHiTEL+Mkc5QCxb1v4iVgEhRDOb/x5Bnq7+8cfonUQWOBemKqYAAh9aYgkhVEIXbbN5fCf+OinEMQhNFK8ToET7C6svqf2Ly8UOnM+RGKJpk+gYQu4f/ix3Bq02xVLVtGxngn+6PAMJ8sL/S7B7/y/W761E9Mb3M8ciL6tcrPySY3yJhaxvt80nMURq45CW5bd//wh7nI5ynRjqtHFxIozTts8bP1LHTokNKyMMle+pUjnydQX5U3yG2cRPCDmh/PZbkDxD1Mq0M2FuFW9tb7U0lu+98SNjHFsPcobyl22zHBxKQCylgBCiUSMzK028bZs/+xdr9CQYmFCskejE3NZ3siSBubrtL9H6/wXjywPV1aqpV0cWzOMzzFq1TLZ+HdrGuYoZnU5J7AThJPhIlxikZpQH8cZXsnErZwcXLTfUhBRlS/gM8/yyYzh8xMlpW8xG4AEbF6/cdwqYk/reG1+JLRvln5JickWllxIkQlLa8xr9F0ngPwlyQyWd5zHFAAAAAElFTkSuQmCC);
    background-size: .66rem .56rem;
    background-position: .33rem .19rem;
    background-repeat: no-repeat;
    position: relative;
}
.discount-product-page .content .coupon-container>dl dt .coupon-image p {
    position: absolute;
    height: .4rem;
    width: .54rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff5647;
    font-size: .22rem;
    font-weight: 600;
    font-family: dinpro;
    left: .4rem;
    top: .17rem;
}
.discount-product-page .content .coupon-container>dl dt .coupon-image p i {
    position: relative;
    font-size: .1rem;
    color: #ff5644;
    font-weight: 400;
    top: -.08rem;
    font-style: normal;
}
.discount-product-page .content .coupon-container>dl dt .no-product-info {
    padding-top: .24rem;
}
.discount-product-page .content .coupon-container>dl dt .device-info {
    width: 2.14rem;
    box-sizing: border-box;
    padding: .12rem .1rem 0 0;
}
.discount-product-page .content .coupon-container>dl dt .device-info .product-info {
    padding: .01rem 0;
}
.discount-product-page .content .coupon-container>dl dt .product-price-info {
    height: .28rem;
    display: flex;
    align-items: center;
    padding-left: .01rem;
}
.discount-product-page .content .coupon-container>dl dt .no-product-info .no-product p {
    color: #68acfe;
}
.discount-product-page .content .coupon-container>dl dt .device-info .product-info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .14rem;
    color: #0e0e0f;
    display: block;
}
.discount-product-page .content .coupon-container>dl dt .product-price-info>span {
    font-size: .14rem;
    line-height: .2rem;
    color: #333;
}
.discount-product-page .content .coupon-container>dl dt .product-price-info .price {
    font-size: .22rem;
    font-family: dinpro;
    line-height: .2rem;
    display: flex;
    color: #fc6232;
    font-weight: 600;
    margin-left: .05rem;
}
.discount-product-page .content .coupon-container>dl dt .product-price-info .price i {
    font-size: .14rem;
    margin-right: .02rem;
    font-style: normal;
}
.discount-product-page .content .coupon-container>dl dd {
    height: .4rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: .1rem;
}
.discount-product-page .content .coupon-container>dl dd .time-container {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: .1rem;
}
.discount-product-page .content .coupon-container>dl dd .time-down {
    height: .13rem;
    display: flex;
    align-items: center;
}
.discount-product-page .content .coupon-container>dl dd .time-down span {
    width: .17rem;
    height: .17rem;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #000;
    font-size: .11rem;
}
.discount-product-page .content .coupon-container>dl dd .time-down i {
    font-size: .1rem;
    color: #333;
    margin: 0 .06rem;
    font-style: normal;
}
.discount-product-page .content .coupon-container>dl dd .time-container .rule {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB+0lEQVRIS7VW2Y7CMAx0uMR939f/fxWqQBQQZ7lFgazGUqp2SdOutFjihdgZe2xPKqSUkkLs+XzS9Xqly+VCj8eD3u83eyYSCcpkMlQoFCifz1MqlQq7goQOABfv93s6nU6hgf6DUqlEtVpNC/QBgIxXqxUZCtOCCiGo0+lwRX4LADiOQ9vtNlbWYU6NRoMqlYp37AEg8+VyGc6lEB4FoNBUYbfb9SphAATMZjNtEBqKrIrFIoEGGJp9Pp9pt9t5jQ/QIgSNRiNOiAHW67W2obh8MBhQOp3meJW1AsJkzedzbWJofKvVIuG6rpxOp1pqFJ+4GL05Ho/sh/Fst9tcEao4HA7a+PF4TMJxHLnZbLQO1WqV6vU64VxdrhwxMQDCjmDqdNZsNknYti1vt1toc5PJJL1er4/zfr9P2WyWqQXFOsvlciQsy5K6C0yzCm7BMcy2bbrf71p3JCcmk4lJLYJLIwRhBJEZDNuOX5ihR38C8M83GosGm4wB4lIEcRsOh7EyV6BMUVSTlTM0BhVgySzLMmauDrnJpjH9vZ3lcpll2zR1/hgeU9Oi/U5TTU5cGedFM0mFHwDl9no9/muxWERW4UlFlNgpEOgRmgzZgP64rmscz4DYwTNKruGDqQCAejrDED7kWjl+9cFRIF99MhXIVx99P6//8dnyA/FBcUbj1TLnAAAAAElFTkSuQmCC);
    background-size: .12rem .12rem;
    background-repeat: no-repeat;
    background-position: 50%;
    width: .18rem;
    height: 100%;
    display: inline-block;
    /* margin-left: -.04rem; */
}
.discount-product-page .content .coupon-container>dl dd .recycle-button {
    font-size: .14rem;
    background-image: linear-gradient(-90deg,#ffd629,#fff03b);
    border-radius: .03rem;
    color: #333;
    font-weight: 700;
    height: .28rem;
    line-height: .28rem;
    width: .86rem;
    text-align: center;
}
/* /////////////////////// */
.sos-images-container {
    display: flex;
    font-size: 0;
}
.sos-images-container>div {
    flex: 1 1;
}
.sos-images-container>div img {
    display: block;
    width: 100%;
}
.sos-navigators-container {
    margin-bottom: .1rem;
    padding: 0 .14rem;
    display: flex;
}
.sos-navigators-container>div {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sos-navigators-container>div img {
    width: 100%;
    display: block;
}
.sos-navigators-container>div span {
    color: #666;
    font-size: .14rem;
    line-height: .18rem;
}
/* //////////////////////// */
.sos-images-container {
    display: flex;
    font-size: 0;
}
.sos-images-container>div {
    flex: 1 1;
}
.sos-images-container>div img {
    display: block;
    width: 100%;
}
</style>