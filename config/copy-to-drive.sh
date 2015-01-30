# chmod 755 copy-to-drive.sh

FONT_FILES=../dist/fonts

rm -r ../../discourse-for-plugins/plugins/discourse-drive/public/drives/default/fonts
for f in $FONT_FILES
do
  cp -r $f ../../discourse-for-plugins/plugins/discourse-drive/public/drives/default/fonts
done

rm -r ../../discourse-for-plugins/plugins/discourse-drive/public/drives/default/assets
ASSETT_FILES=../dist/assets

for f in $ASSETT_FILES
do
  cp -r $f ../../discourse-for-plugins/plugins/discourse-drive/public/drives/default/assets
done

