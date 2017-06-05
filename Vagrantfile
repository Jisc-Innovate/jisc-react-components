#VAGRANTFILE

# Requires https://github.com/smdahlen/vagrant-hostmanager


Vagrant.configure("2") do |config|

  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.hostmanager.manage_guest = true
  config.hostmanager.ignore_private_ip = false
  config.hostmanager.include_offline = true

  config.vm.box = "ubuntu/trusty64"

	config.vm.network "private_network", ip: "192.168.33.22"
	config.vm.hostname = "jisc-react-components.dev.data.alpha.jisc.ac.uk"

	config.vm.provider "virtualbox" do |v|
		v.name = "JISC-REACT-COMPONENTS"
    v.memory = 1536
	end

	config.vm.provision :shell, :path => "provision.sh", :keep_color => true

	config.vm.synced_folder ".", "/srv/jisc-react-components", :mount_options => ["dmode=777", "fmode=777"]
end
