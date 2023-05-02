//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
        const hash = md5(JSON.stringify(args)); // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
            console.log("Из кэша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + objectInCache.result;
        }
  
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({hash: hash, result: result}); // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
            cache.shift();// если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
  }
  

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    let isFirstCall = true;
    
    function wrapper(...args) {
        wrapper.allCount++;

        if (isFirstCall) {
          isFirstCall = false;
          return callOriginalFunction();
        }

        if (timeoutId) {
            console.log("удалили текущий таймаут");
            clearTimeout(timeoutId);
        }
        console.log("создаем новый таймаут");
        timeoutId = setTimeout(() => {
            timeoutId = null;
            callOriginalFunction();
            console.log("вызвали колбек");
        }, delay);

        function callOriginalFunction() {
          wrapper.count++;
          return func.apply(this, args);
        }
    }

    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}


  