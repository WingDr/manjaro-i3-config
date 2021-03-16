#!/bin/bash
# save this file to ${HOME}/.config/clash/start-clash.sh

# save pid file
echo $$ > ${HOME}/.config/clash/clash.pid

diff ${HOME}/.config/clash/config.yaml <(curl -s ${CLASH_URL})
if [ "$?" == 0 ]
then
    /usr/local/bin/clash -d /root/.config/clash/
else
    curl -L -o ${HOME}/.config/clash/config.yaml ${CLASH_URL}
    /usr/local/bin/clash -d /root/.config/clash/
fi
url -L -o ${HOME}/.config/clash/config.yaml ${CLASH_URL}
    /usr/local/bin/clash -d /root/.config/clash/
fi