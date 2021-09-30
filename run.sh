#!/bin/bash
# 1. 如果没有传入任何参数：则全部执行，执行的脚本取决于 package.json
# 2. 如果有传入比如 -D 这样的参数 则我们拿到传入的参数 再修改配置文件 config.json
# 3. 如果传入了参数 并且没有-D 则直接一条一条执行 主要是为了本地调试

if [ "$#" = 0 ]; then
    npm run paralleltest
# 第二个或者第三个输入以 -D 开头
elif [[ "$*" == *-D* ]]; then
    env='', domain='', team=''
    for i in "$@"; do
        if [[ "$i" == -Denv* ]]; then
            shift
            env=${i:6}
        elif [[ "$i" == -Ddomain* ]]; then
            shift
            domain=${i:9}
        elif [[ "$i" == -Dteam* ]]; then
            shift
            team=${i:7}
        fi
    done
    envStr=''
    if [[ "$team" == "hk" || "$team" == "tw" ]]; then
        if [ "$env" != "" ]; then
            if [[ "$env" == "pro" ]]; then
                envStr="shoplineapp"
            elif [[ "$env" == "pre" ]]; then
                envStr="shoplineapp"
            elif [[ "$env" == "stg" ]]; then
                envStr="shoplinestg"
            fi
        fi
    elif [ "$env" != "" ]; then
        if [[ "$env" == "pro" ]]; then
            envStr="myshopline"
        elif [[ "$env" == "pre" ]]; then
            envStr="preview.myshopline"
        elif [[ "$env" == "stg" ]]; then
            envStr="myshoplinestg"
        fi
    fi
    if [ "$envStr" != "" ]; then
        # 注意 -i.bak 的写法是为了兼容 mac 跟 linux
        # mac系统禁止直接 sed 修改 需要提前做备份
        echo '切换环境='"$envStr"
        sed -i.bak "s/\"env\":[^,]*\(,*\)$/\"env\":\"$envStr\"\1/" config.json
    fi
    if [ "$domain" != "" ]; then
        echo '切换域名='"$domain"
        sed -i.bak "s/\"domain\":[^,]*\(,*\)$/\"domain\":\"$domain\"\1/" config.json
    fi
    npm run moduletest "$@"
else
    npm run singletest "$@"
fi
