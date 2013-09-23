ALL:
	cd text; zip -r ../Representing\ Mechanics\ in\ Modeling\ Physics.zip *; cd ..

clean:
	rm Representing\ Mechanics\ in\ Modeling\ Physics.zip
test:
	unzip -l Representing\ Mechanics\ in\ Modeling\ Physics.zip
read:
	echo firefox "jar:file://`pwd`/Representing%20Mechanics%20in%20Modeling%20Physics.zip!"&
