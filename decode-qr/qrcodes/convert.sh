for i in *.png ; do
  convert "$i" "${i%.*}.jpg" ;
done
