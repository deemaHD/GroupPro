function Group () {
    var students = [],
        studentsClone = [],
        i;
    
    init();
    
    function init () {
        students.push(new Student('Barney','Gumble', '+211234567', 'barneybeer', 'email@em.ua', 'Dnipropetrovsk', 'Barikadnaya 34'));
        students.push(new Student('Montgomery', 'Burns', '+123456789', 'burnsSKP', 'mail@em.ua', 'Dnipropetrovsk', 'Gagarina 12'));
        students.push(new Student('Kent', 'Brockman', '+345623789', 'brockman_news', 'post2542@i.ua', 'Dnipropetrovsk', 'Kirova, 1776'));
        students.push(new Student('Troy', 'McClure', '+1239876543', 'mcluuure', 'mail@ee.ua', 'Dnipropetrovsk', 'Kazakova, 46'));
        students.push(new Student('Julius', 'Hibert', '+1234432345', 'hibbbert_103', 'email.32@ua', 'Dnipropetrovsk', 'Moskovskaya, 101'));
        students.push(new Student('Carl', 'Carlson', '+198765678', 'carlsoon', 'post@i.ua', 'Dnipropetrovsk', 'Zavodskaya, 43'));
        students.push(new Student('Lenny', 'Leonard', '+12434334', 'leonardo', 'post@i.ua', 'Dnipropetrovsk', 'Hollywood, 56'));
        students.push(new Student('Waylon', 'Smithers', '+142309876', 'smeetherz', 'post@i.ua', 'Dnipropetrovsk', 'Zavodskaya, 76'));
    }
    
    this.getStudents = function () {
        studentsClone = [];
        for (i = 0; i < students.length; i++) {
            studentsClone[i] = students[i].toJSON();
        }
        return studentsClone;    
    };
    
    return this;
}