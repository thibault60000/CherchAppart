<?php

namespace CherchAppartBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class homeController extends Controller
{
    public function indexAction()
    {
        return $this->render('@CherchAppart/Home/index.html.twig');
    }

}
