#!/bin/bash

# Sets up Vagrant development box

# Important Don't run this script directly; run 'vagrant up' instead

# Install Git
echo ""
echo "---------------------------------------------------------------------"
echo "Setting up prerequisites..."
echo "---------------------------------------------------------------------"
echo ""
echo 'echo "LC_ALL=C" >> /etc/default/locale' | sudo -s
LC_ALL="C"
sudo apt-get update -qq
sudo apt-get install -q -y git build-essential curl

echo ""
echo "---------------------------------------------------------------------"
echo "Installing GCC and G++ 4.8"
echo "---------------------------------------------------------------------"
echo ""
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-4.8 g++-4.8
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 50
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-4.8 50


# Install NodeJS
echo ""
echo "---------------------------------------------------------------------"
echo "Installing NodeJS & Yarn..."
echo "---------------------------------------------------------------------"
echo ""
sudo apt-get install -q -y python-software-properties python g++ make
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update -qq
sudo apt-get install -q -y nodejs yarn
sudo npm update -g npm


# Install packages & build assets
echo ""
echo "---------------------------------------------------------------------"
echo "Installing Node modules & generating assets..."
echo "---------------------------------------------------------------------"
echo ""
cd /srv/jisc-react-components
yarn install
yarn run storybook
# DONE!!!
