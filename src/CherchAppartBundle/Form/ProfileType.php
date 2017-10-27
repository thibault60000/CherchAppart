<?php
namespace CherchAppartBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class,  array('label' => 'form.username', 'translation_domain' => 'FOSUserBundle', 'disabled' => 'disabled'))
            ->add('email', EmailType::class,  array('label' => 'form.email', 'translation_domain' => 'FOSUserBundle', 'disabled' => 'disabled'))
            ->add('imageFile', FileType::class,  array('label' => 'form.imageFile', 'translation_domain' => 'FOSUserBundle', 'disabled' => 'disabled'))
            ->add('adress', TextType::class, array('label' => 'form.adress', 'translation_domain' => 'FOSUserBundle', 'disabled' => 'disabled'))
            ->add('postal_code', NumberType::class, array('label' => 'form.postal_code', 'translation_domain' => 'FOSUserBundle', 'disabled' => 'disabled'))
            ->add('city', TextType::class, array('label' => 'form.city', 'translation_domain' => 'FOSUserBundle', 'disabled' => 'disabled'))
            ->add('phone_number', NumberType::class, array('label' => 'form.phone_number', 'translation_domain' => 'FOSUserBundle', 'disabled' => 'disabled'));
    }

    public function getParent()
    {
        return 'FOS\UserBundle\Form\Type\ProfileFormType';
    }
}