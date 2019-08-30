/**
 *Returns true if a person at (personLat, persnLong) is located
 *within the polygon coordinates in (polyLats, polyLongs)
 *
 *Gets sum of angles made between the person point and
 *each pair of points making up the polygon
 */
function isPersonInDangerZone(personLat, personLong, polyLats, polyLongs){
    var i;
    var angle;
    var point1_lat;
    var point1_long;
    var point2_lat;
    var point2_long;
    //var polySize= polyLats.size();
    for (i = 0; i < polyLats.length; i++) {
         point1_lat=polyLats(i)-personLat;
         point1_long=polyLongs(i)-personLong;
         point2_lat=polyLats((i+1)%n)-personLat; // uses modulas for the last values in the array
         point2_long=polyLats((i+1)%n)-personLat;
         angle += Angle2D(point1_lat,point1_long,point2_lat,point2_long);
    }

    if(Math.abs(angle)<Math.PI)
        return false;
        else
        return true;
}

/**
 * Returns angle for equation
 * Helper method for isPersonInDangerZone
 */
function Angle2D(y1, x1, y2, x2){
var dtheta,theta1,theta2;
theta1=Math.atan2();
theta2=Math.atan2(y2,x2);
dtheta=theta2-theta1;
while (dtheta > Math.PI)
    dtheta -= (Math.PI*2);

while (dtheta < -Math.PI)
      dtheta += (Math.PI*2);

   return(dtheta);
}
