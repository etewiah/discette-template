# chmod 755 copy-to-drive.sh

FONT_FILES=../dist/fonts

rm -r ../../discourse-for-plugins/plugins/discourse-drive/public/drives/reader/fonts
for f in $FONT_FILES
do
  cp -r $f ../../discourse-for-plugins/plugins/discourse-drive/public/drives/reader/fonts
done

rm -r ../../discourse-for-plugins/plugins/discourse-drive/public/drives/reader/assets
ASSETT_FILES=../dist/assets

for f in $ASSETT_FILES
do
  cp -r $f ../../discourse-for-plugins/plugins/discourse-drive/public/drives/reader/assets
done

